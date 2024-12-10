'use client'
import "./globals.css";
import Sidebar from "@/components/sidebar";
import { usePathname  } from "next/navigation";
import { ToastBar, Toaster } from "react-hot-toast";








export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

const pathName = usePathname()

  
  return (

    <html lang="en">
      <head>
        <title>Sisrekomact</title>
      </head>
      <body
        className={` max-h-screen   antialiased bg-gradient-to-br from-linear1 to-linear2 `}
      >
        {pathName === '/login' ? <div> 
          <Toaster position="top-center" />
          
          {children}</div>    : <div className="grid grid-cols-1 md:grid-cols-4 ">
          <div className="col-span-1">
            <Sidebar/>
          </div>
          <div className="col-span-3 mx-1 mt-[11px] dark:text-black">
          <Toaster position="top-right"/>
          {children}
          </div>
        </div>}
      </body>
    </html>
  );
}
