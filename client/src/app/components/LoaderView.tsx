'use client'

import { useRouter } from 'next/navigation';
import React, { useEffect, useState, CSSProperties } from 'react';
import { useUserAuth } from "@/app/_utils/auth-context";
import { toast } from "react-toastify";


interface LoaderPageProps {
    route: string; 
    result: any; 
}

export default function LoaderPage({ route, result }: LoaderPageProps) {
    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter();

    const [dbUser, setDbUser] = useState(false);
    const { getIdToken } = useUserAuth();

    const processSignIn = async () => {

        try {

            console.log("User: ", result.user);

            const userInfo = {
                email: result.user.email
            }

            const token = await getIdToken();

            if (!token) {
                throw new Error("Token not available. Please try again.");
            }

            //backend api call
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token, userInfo }),
            });
            
            if (!response.ok) {
                const errorData = await response.json();
                console.log("Login failed:", errorData);  
                toast.error(errorData.message || "An unknown error occurred");
                throw new Error(errorData.message || "Something went wrong!");
            }

            //TODO: load userContext from response
            const userResponse = await response.json();
            
            if (userResponse.data.role !== "Admin") {
                toast.error(userResponse.message);
                router.push("/admin/login");
                return
            }

            setDbUser(userResponse);

            console.log("DB User: ", userResponse);

            toast.success(userResponse.message);

            router.push(route);

        } catch (error: any) {
            console.log("Sign In error: ", error);

            toast.error(error.message || "Oops Something went wrong!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    } 

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isMounted) {
            const timer = setTimeout(() => {
                processSignIn();
            }, 5000);

            return () => clearTimeout(timer); // Cleanup the timer on component unmount
        }
    }, [isMounted, router, route]);


    return (
        <div className="bg-slate-800 flex flex-row justify-center items-center w-full h-full md:flex-row md:items-center z-50 top-0 left-0 fixed">
            
            {!isMounted && <p className="text-slate-100">Loading...</p>}
            <p className="text-slate-100">Loading Admin Page... Please wait...</p>
            
        </div>
    );
}