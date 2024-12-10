'use client'
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function LoginPage () {
  
    const [npm , setNpm] = useState('')
    const [error , setError] = useState('')
    const [password , setPassword] = useState('')
    const router = useRouter()

    const handleLogin = async (e: any) => {
      e.preventDefault()

      try {
        const res = await axios.post('http://localhost:5000/login' , {
          npm_mahasiswa: npm , 
          password
        })

        if (res.data.token) {
          // Simpan token di localStorage atau cookies
          localStorage.setItem('token', res.data.token);
    
          // Redirect ke halaman dashboard
          router.push('/dashboard');
        }
      } catch (err : any) {
        setError(err.response?.data?.message || 'Login gagal');
        toast.error('Login Failed!')
        router.refresh()
      }
    }

   
    return (
        <div>
          

            <div className="flex justify-center items-center h-screen  ">
                <div className="bg-white border w-[500px] h-[600px] border-black rounded-lg">
                    <div className="flex flex-col">
                        <div className="flex justify-center my-4">
                          <img src={'/recomendation.jpeg'} width={200} height={200} className="w-52 h-auto" alt="Ilustrator" />
                        </div>
                        <h1 className="text-center text-2xl dark:text-black  font-extrabold mt-8">Login</h1>

                        <form onSubmit={handleLogin} className="p-[20px] border-none dark:text-black " >
                          <div className="border-2 border-b-black  my-[30px] h-[50px] outline-none relative flex flex-col">
                            <label className=" top-[45%] border-none ">NPM</label>
                            <input type="text" onChange={(e) => setNpm(e.target.value)} className="bg-transparent outline-none border-none  mb-4 " required  />

                          </div>

                          <div className="border-2 border-b-black  my-[30px] h-[50px] relative flex flex-col">
                            <label className="top-[45%]">Password</label>
                            <input type="password" onChange={(e) => setPassword(e.target.value) } className="bg-transparent focus:top-[-10px] mb-4" required  />
                            
                          </div>
                        
                        

                          <div className="mt-8">
                            <button type="submit" className="bg-primary w-full py-4 text-white rounded-lg font-bold">Login</button>
                          </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}