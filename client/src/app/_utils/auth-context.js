
'use client';

import { useContext, createContext, useState, useEffect } from "react";
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase";
import { useRouter } from "next/navigation";
import { useAdminUser } from "./adminUser-context";
import { toast } from "react-toastify";


const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authUserLoading, setAuthUserLoading] = useState(true);
  const router = useRouter();
  const { updateAdminUser } = useAdminUser();
  const [isProcessingAuth, setIsProcessingAuth] = useState(false);

  
  const googleSignIn = async () => {
    
    if (isProcessingAuth) {
      return; 
    }
    setIsProcessingAuth(true);    

    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });

    try {
      const result = await signInWithPopup(auth, provider);
      const token = await result.user.getIdToken(true);

      const userWithToken = {
        ...result.user,
        currentToken: token
      };

      setUser(userWithToken);
      return result;

    } catch (error) {
      console.error("Google Sign In Error:", error);
      throw error;
    } finally {
      setIsProcessingAuth(false);
    }
  };

  const clearLocalStorage = () => {
    localStorage.removeItem("user");
    sessionStorage.clear();
  };


  const signOutFirebase = async () => {
    try {
      clearLocalStorage();
      await signOut(auth);
      setUser(null);
      
      // clear Google Auth session
      const googleAuth = window.gapi?.auth2?.getAuthInstance();
      if (googleAuth) {
        await googleAuth.signOut();
      }

    } catch (error) {
      console.error("Sign Out Error:", error);
      throw error;
    }
  };

  const signOutAll = async() => {
    try {    
      clearLocalStorage();
      await signOutFirebase();
      updateAdminUser(null); 

      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/logout`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        credentials: "include",
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.log("Logout failed:", errorData);
        throw new Error(errorData.message || "An unknown error occurred");
      }
      
      console.log("Logout successful");
      router.push("/admin/login");
    }
    catch (error) {
      console.error("Sign Out Error:", error);
      throw error
    }
  };


  const getIdToken = async (forceRefresh = true) => {
    try {
      if (!auth.currentUser) {
        console.log("No current user in Firebase");
        return null;
      }
      const token = await auth.currentUser.getIdToken(forceRefresh);

      // update user object with new token
      setUser(prevUser => ({
        ...prevUser,
        currentToken: token
      }));

      return token;
    } catch (error) {
      console.error("Error getting ID token:", error);
      return null;
    }
  };

  const processUserSignIn = async (result, closeLoaderBackdrop) => {
    if (isProcessingAuth) {
      return;
    }

    try {
      if (!user) {
        throw new Error("No user available, unable to retrieve token.");
      }

      let token = user.currentToken;
      
      if (!token) {
          console.log("No token in user object, attempting to fetch new token...");
          token = await getIdToken(true);
      }

      if (!token) {
          throw new Error("Unable to retrieve authentication token. Please try again.");
      }

      // console.log("Token retrieved successfully:", token);

      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`, {
          method: "POST",
          headers: { 
              "content-type": "application/json",
              "authorization": `Bearer ${token}`
          },
          credentials: "include",
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.log("Login failed:", errorData);  
        toast.error(errorData.message || "Login failed: unknown error occurred");

        await signOutFirebase();
        closeLoaderBackdrop();
        return;
      }  
    
      const userResponse = await response.json();

      // console.log("User response: ", userResponse);

      updateAuthUser({ 
        role: userResponse.data.role,
        currentToken: token 
      });

      updateAdminUser(userResponse.data);                  
      toast.success(userResponse.message);      
      router.push("/admin/");
      // closeLoaderBackdrop();

    } catch (error) {
      console.error("Sign In process error:", error);        
      toast.error(error.message || "Oops Something went wrong!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
      });
      await signOutFirebase();
      closeLoaderBackdrop();
    }
  };

  const updateAuthUser = (newData) => {
    setUser(prevUser => {
      // if (!prevUser) return newData;
      
      // create new user object preserving Firebase methods
      const mergedUser = {
        ...prevUser,
        ...newData,
        currentToken: prevUser.currentToken
      };      
      
      return mergedUser;
    });
  };

  const validateSession = async (currentUser) => {

    try {  
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/session`, {
        method: "POST",
        headers: { 
          "content-type": "application/json"
        },
        credentials: "include", 
      });

      if (response.ok) {
        const userResponse = await response.json();        

        if (userResponse.data) {
          setUser({
            ...currentUser,
            role: userResponse.data.role,
          });

          // updateAdminUser(userResponse.data);
          
        } else {
          console.log("No session data received, user not authenticated.");
          setUser(null);
        }
      } else if (response.status === 401) {
        console.error("No valid session found.");
        setUser(null);
      }
    } catch (error) {
      console.error("Error checking session:", error);
      return null;
    }
  }



  useEffect(() => {
    let isMounted = true;
  
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!isMounted) return;
  
      setAuthUserLoading(true);
  
      if (currentUser) {
        try {
          await validateSession(currentUser);
        } catch (error) {
          console.error("Session validation error:", error);
          if (isMounted) setUser(null);
        }
      } else {
        if (isMounted) setUser(null);
      }
  
      if (isMounted) setAuthUserLoading(false);
    });
  
    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, []);


  const delayedRouter = (path) => {
    setTimeout(() => {
      router.push(path);
    }, 3000);
  }

  useEffect(() => {
    if (!authUserLoading) {

      let redirectTimer;

      if (!user) {
        console.log("Redirecting to admin login...");
        delayedRouter("/admin/login");

      } else if (user.role !== "Admin") {
        console.log("Redirecting non-admin user to admin login...");
        delayedRouter("/admin/login");
      } else {
        console.log("Redirecting admin to dashboard...");
        delayedRouter("/admin/");
      }
    }
  }, [user, authUserLoading]);

  return (
    <AuthContext.Provider value={{ 
      user, 
      authUserLoading,
      updateAuthUser, 
      googleSignIn, 
      signOutAll,
      signOutFirebase, 
      getIdToken,
      processUserSignIn
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useUserAuth = () => {
  return useContext(AuthContext);
};
