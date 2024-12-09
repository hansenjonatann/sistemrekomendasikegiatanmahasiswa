'use client'
import TableActivities from "@/components/table-activities";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function HalamanProfil() {
  const [angkatan , setAngkatan] = useState('')
  const [name , setName] = useState('')
  const [npm , setNpm] = useState('')
  const [prodi , setProdi] = useState('')  
  const [ipk , setIpk] = useState('')
  const [status , setStatus] = useState('')

  const fetchDetailDataMahasiswa = async () => {
  const token = localStorage.getItem('token')

    const response = await axios.get(`http://localhost:5000/studentdetail` , {
      headers: {
        Authorization: `Bearer ${token}` 
      },
    })
   
    if(response) {
      setAngkatan(response.data.data.angkatan_mahasiswa)
    setNpm(response.data.data.npm_mahasiswa)
    setName(response.data.data.nama_mahasiswa)
    setProdi(response.data.data.prodi_mahasiswa)
    setIpk(response.data.data.ipk_mahasiswa)
    setStatus(response.data.data.status_mahasiswa)
    }
  }



  useEffect(() => {
    fetchDetailDataMahasiswa()
  } , [])
  return (
    <div className="mr-[44px]">
      <div className="mt-[29px] bg-white border  border-black rounded-[20px] h-[255px]">
        <div className="grid grid-cols-1 md:grid-cols-4 mx-[35px] md:mt-8">
          <div>
            <form action="" className="flex mx-24 space-x-4">
              <div className=" text-black">
                <div className="flex flex-col">
                  <label htmlFor="nama">Nama</label>
                  <input
                    type="text"
                    className=" border-2 rounded-xl border-black mt-1 text-center  py-2 w-[207px] placeholder:text-center  placeholder:text-black"  readOnly
                    placeholder={name}
                  />
                </div>

                <div className="flex flex-col mt-4">
                  <label htmlFor="prodi">Prodi</label>
                  <input
                    type="text"
                    className=" border-2 border-black rounded-xl mt-1 text-center  py-2 w-[207px] placeholder:text-center placeholder:text-black"
                    readOnly
                    placeholder={prodi}
                  />
                </div>
              </div>

              <div className=" text-black">
                <div className="flex flex-col">
                  <label htmlFor="npm">NPM</label>
                  <input
                    type="text"
                    className=" border-2 border-black rounded-xl mt-1 text-center  py-2 w-[207px] placeholder:text-center placeholder:text-black"
                    readOnly
                    placeholder={npm}
                  />
                </div>

                <div className="flex flex-col mt-4">
                  <label htmlFor="angkatan">Angkatan</label>
                  <input
                    type="number"
                    className=" border-2 border-black rounded-xl mt-1 text-center  py-2 w-[207px] placeholder:text-center placeholder:text-black"
                    placeholder={angkatan}
                  />
                </div>
              </div>

              <div className=" text-black">
                <div className="flex flex-col">
                  <label htmlFor="nohp">IPK</label>
                  <input
                    type="tel"
                    className=" border-2 border-black rounded-xl mt-1 text-center  py-2 w-[207px] placeholder:text-center placeholder:text-black"
                    placeholder={ipk}
                  />
                </div>

                <div className="flex flex-col mt-4">
                  <label htmlFor="email">Status</label>
                  <input
                    type="email"
                    className=" border-2 border-black rounded-xl mt-1 text-center  py-2 w-[207px] placeholder:text-center placeholder:text-black"
                    placeholder={status}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className=" bg-white h-96 mt-[80px] border flex justify-center border-black  overflow-y-scroll rounded-[20px]">
        <TableActivities/> 
        </div>
      </div>
    </div>
  );
}
