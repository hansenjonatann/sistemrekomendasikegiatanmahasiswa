'use client'
import { HomeIcon, Info, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar  () {

    const sidebaritems = [
        {
            id: 1,
            label: 'Dashboard',
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

    const pathName = usePathname()
    return (
        <div className=" mx-7 bg-primary h-[620px] rounded-3xl">
                <div className="flex flex-col mx-5 ">
                    {/* <div className="flex items-center   mt-[61px] space-x-4">
                        <div className="w-14 h-14 rounded-full bg-white" ></div>
                        <h1 className="font-extrabold text-lg">Nama Mahasiswa</h1>
                    </div> */}
                    <div className="mt-16 flex justify-center flex-col">
                        {sidebaritems.map((item: any , index: number) => (
                            <Link key={index} href={item.path} className={item.path === pathName ? "flex items-center bg-white rounded-lg p-3 text-black space-x-4 font-semibold mt-3 " : "flex items-center space-x-4 text-white font-semibold mt-3 p-3"}>
                            <item.icon />
                            <h1>{item.label}</h1>
                        </Link>
                        ))}
                    </div>

                    <div className="mt-10 bg-white w-[140px]  mx-auto py-2 rounded-lg">
                        <h1 className="text-black text-center font-semibold uppercase">Log out</h1>
                    </div>

                    <div className="mt-28 h-32 rounded-[20px] bg-white/40">
                        <div className="flex flex-col mt-6 text-center ">
                            <p className="">Have any problems?</p>

                            <div className=" mt-8">
                                <Link href={'/contact'} className="font-semibold rounded-md text-white bg-secondary p-2" >Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}