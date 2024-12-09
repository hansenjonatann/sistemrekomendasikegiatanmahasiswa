'use client'

import axios from "axios"
import { useEffect, useState } from "react"

export default function TableActivities () {
    const [activities  , setActivities ] = useState([])
    const [loading , setLoading] = useState(false)

    const fetchActivities = async () => {
        try{
            setLoading(true)
            const token = localStorage.getItem('token')

            if(!token) {
                console.log('No token')
            }

            const res = await axios.get('http://localhost:5000/kegiatanmahasiswa' , {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            if(res) {
                setLoading(false)
                console.log(res)
                setActivities(res.data.data)
            }

        }catch(err) {
            setLoading(false)
            console.log(err)
        }
    }

    useEffect(() => {
        fetchActivities()
    } , [])
    return (
        <>
            {loading ? 'Mohon tunggu sebentar...' : <table className="table w-[930px]  mt-4 border-collapse ">
                        <thead>
                        <tr className="bg-primary text-white text-center">
                        <th className=""># </th>
                        <th className="">Nama Kegiatan</th>
                        <th className="">Kategori</th>
                        </tr>
                        </thead>
                <tbody className="text-center">
                    {activities.map((kegiatan: any , index: number) => (
                      <tr key={index} className="">
                      <td className="border border-black py-2 px-4">{index + 1}</td>
                      <td className="border border-black py-2 px-4">{kegiatan.nama_kegiatan}</td>
                      <td className="border border-black py-2 px-4">{kegiatan.kategori}</td>
                     </tr>
                    ))}
                    
                    
                   
                </tbody>
            </table>}
        </>
    )
}