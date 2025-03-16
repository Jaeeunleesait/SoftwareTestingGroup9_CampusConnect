// import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AuthContextProvider } from "@/app/_utils/auth-context";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserDataProvider } from '@/app/_utils/userData-context';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`font-inter antialiased` }>
        
        <UserDataProvider>
          <ToastContainer 
            position="top-center" 
            autoClose={3000} 
            hideProgressBar={false} 
            newestOnTop
            rtl={false}               // Support for right-to-left text
            closeOnClick 
            pauseOnHover 
            draggable 
            theme="colored"     
          />
          <AuthContextProvider>
            {children}
          </AuthContextProvider>
        </UserDataProvider>
      </body>
    </html>
  );
}
