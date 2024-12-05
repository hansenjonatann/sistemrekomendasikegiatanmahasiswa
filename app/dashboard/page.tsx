'use client'
import Card from "@/components/card";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";


export default function Home() {

  const [cardList , setCardList] = useState([])
  const [category , setCategory] = useState('')
  const [nama , setNama] = useState('')
  const [npm , setNpm] = useState('')
  const router = useRouter()
  const [error , setError] = useState('')
  const [cluster , setCluster] = useState(0)
  const fetchReomendationData = async () => {
    try {
      const token = localStorage.getItem('token')

      if(!token) {
        console.log('Token tidak ditemukan')
      }
      const response = await axios.get('http://localhost:5000/rekomendasi', {
        headers: {
          Authorization:`Bearer ${token}`
        },
        withCredentials: true, // Pastikan cookie sesi dikirim bersama permintaan
      });

      if(response) {
        console.log(response.data)
        setCardList(response.data.recommended_activities);
        setNama(response.data.nama_mahasiswa)
        setNpm(response.data.npm_mahasiswa)
      }
    } catch (err : any) {
      setError(err.response?.data?.message || 'Gagal memuat rekomendasi');
      if (err.response?.status === 401) {
      }
    }
  };
  

  useEffect(() => {
    fetchReomendationData()
  } , [router])

  // const cardList = [
  //   {
  //     id: 1,
  //     title: 'Card 1',
  //     category: 'SI'
  //   },
  //   {
  //     id: 2,
  //     title: 'Card 2',
  //     category: 'SI'
  //   },
  //   {
  //     id: 3,
  //     title: 'Card 3',
  //     category: 'SI'
  //   }

  // ]
  return (
   <div className="mt-4 mr-[50px]">

    <div className="flex flex-col space-y-3">
    <h1 className="font-bold text-xl">Detail</h1>
    <p>Berdasarkan data yang ada , mahasiswa/i dengan nama <span className="font-bold">{nama} - {npm}</span> : {category == 'Umum' ? 'kategori' : ' memiliki ketertarikan di bidang'} <span className="font-bold">{category}</span> yang termasuk ke dalam cluster / kelompok : <span className="font-bold">{cluster}</span> , untuk mengembangkan kemampuan yang dimiliki oleh <span className="font-semibold">{nama}</span> , sistem memberikan rekomendasi kegiatan untuk <span className="font-bold">{nama}</span> </p>
    </div>


    <h1 className="font-bold text-primary text-xl mt-4">Recommendation activities</h1>


      <div className="grid grid-cols-1 md:gap-5 md:grid-cols-4 mt-6">
        {cardList.map((item: any , index: number) => (
          <Card title={item.nama_kegiatan} category={item.kategori} key={index}/>
        ) ) }
      </div>

   </div>
  );
}
