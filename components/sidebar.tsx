'use client'
import { HomeIcon, Info, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Sidebar  () {
    
    const router = useRouter()

    const sidebaritems = [
        {
            id: 1,
            label: 'Home',
            icon: HomeIcon , 
            path: '/'
        },
        {
            id: 2,
            label: 'Profile',
            icon: User,
            path: '/profile'
        },
        {
            id: 3,
            label: 'About',
            icon: Info,
            path: '/about'
        }
    ]

    const handleLogout = () => {
        router.push('/login')
    }

    const pathName = usePathname()
    return (
        <div className="  bg-primary w-[250px] h-screen ">
                <div className="flex flex-col  ">
                   
                   <Image src={'/logouibputih.webp'} alt="logo uib" width={100} height={0} className="mx-auto mt-[50px]"/>

                    <div className="mt-[20px] flex justify-center flex-col">
                        {sidebaritems.map((item: any , index: number) => (
                            <Link key={index} href={item.path} className={item.path === pathName ? "flex items-center bg-darkturqoise  pl-[40px] text-white space-x-4 font-semibold mt-3 leading-[60px] " : "flex items-center space-x-4 text-white transition-all ease-in-out duration-500 hover:bg-darkturqoise font-semibold mt-3 pl-[40px] leading-[60px]"}>
                            <item.icon  />
                            <h1 className="font-bold">{item.label}</h1>
                        </Link>
                        ))}
                        
                    </div>

                        <button onClick={handleLogout} className=" bg-red mt-[190px] text-white font-bold transition-all duration-500 ease-in-out hover:bg-maroon  text-center h-[50px] w-[130px]  mx-auto rounded-lg border-2 border-white ">Logout</button>

                    
                </div>
        </div>
    )
}