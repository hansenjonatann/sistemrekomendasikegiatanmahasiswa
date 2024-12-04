'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage () {
  

    const router = useRouter()
    const handleLogin = () => {
        router.push('/dashboard')
    }
    return (
        <div>
            <div className="flex w-full m-4">
                <Image src={'/logouib.webp'} width={100} height={100} alt="logo uib" />
                <h1 className="text-2xl font-extrabold text-wrap w-[30px] ml-4">Universitas Internasional Batam</h1>
            </div>

            <div className="flex justify-center  ">
                <div className="bg-white border w-[500px] h-[440px] border-black rounded-lg">
                    <div className="flex flex-col">
                        <h1 className="text-center text-2xl  font-extrabold mt-8">Login</h1>

                        <form action="" className="p-[40px] border-none ">
                          <div className="border-2 border-b-black  my-[30px] h-[50px] outline-none relative flex flex-col">
                            <label className=" top-[45%] border-none ">NPM</label>
                            <input type="email" className="bg-transparent outline-none border-none  mb-4 "  />

                          </div>

                          <div className="border-2 border-b-black  my-[30px] h-[50px] relative flex flex-col">
                            <label className="top-[45%]">Password</label>
                            <input type="password" className="bg-transparent focus:top-[-10px] mb-4"  />
                            
                          </div>
                        
                        

                          <div className="mt-8">
                            <button onClick={handleLogin} className="bg-primary w-full py-4 text-white rounded-lg font-bold">Login</button>
                          </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}