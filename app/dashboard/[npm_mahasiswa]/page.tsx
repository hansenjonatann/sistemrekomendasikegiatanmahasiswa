'use client'
import Card from "@/components/card";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Home({params} : any) {

  const {npm_mahasiswa} : any = React.use(params)
  const [cardList , setCardList] = useState([])
  const fetchReomendationData = async () => {
    const response = await axios.get(`http://localhost:5000/recomend/${npm_mahasiswa}`)
    if(response)
    {
      console.log(response.data.rekomendasi_kegiatan)
      setCardList(response.data.rekomendasi_kegiatan)
    }
  }

  useEffect(() => {
    fetchReomendationData()
  } , [])

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
   <div className="mt-10 mr-[50px]">

    <h1 className="font-bold text-primary text-xl">Recommendation for you</h1>

      <div className="grid grid-cols-1 md:gap-5 md:grid-cols-4 mt-8">
        {cardList.map((item: any , index: number) => (
          <Card title={item.nama_kegiatan} category={item.kategori} key={index}/>
        ) ) }
      </div>

   </div>
  );
}
