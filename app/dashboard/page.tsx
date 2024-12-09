'use client'
import Card from "@/components/card";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";


export default function Home() {

  const [cardList , setCardList] = useState([])
  const [category , setCategory] = useState('')
  const [nama , setNama] = useState('')
  const [npm , setNpm] = useState('')
  const router = useRouter()
  const [error , setError] = useState('')
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
      });

      if(response) {
        console.log(response.data)
        setCardList(response.data.recommended_activities);
        setNama(response.data.nama_mahasiswa)
        setNpm(response.data.npm_mahasiswa)
        setCategory(response.data.category)
      }
    } catch (err : any) {
      setError(err.response?.data?.message || 'Gagal memuat rekomendasi');
      toast.error(error)
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
    <p>Berdasarkan data yang ada , mahasiswa/i dengan nama <span className="font-bold">{nama} - {npm}</span> : {category == 'Umum' ? 'secara' : ' memiliki ketertarikan di bidang'} <span className="font-bold">{category}</span>  . Sistem memberikan rekomendasi kegiatan yang dapat diikuti oleh <span className="font-bold">{nama}</span> dalam mengembangkan pengetahuan </p>. 
    </div>


    <h1 className="font-bold text-primary text-xl ">Recommendation activities</h1>


      <div className="grid grid-cols-1 md:gap-5 md:grid-cols-4 mt-6">
        {cardList?.map((item: any , index: number) => (
          <Card title={item.nama_kegiatan} category={item.kategori} key={index}/>
        ) ) }
      </div>

   </div>
  );
}
