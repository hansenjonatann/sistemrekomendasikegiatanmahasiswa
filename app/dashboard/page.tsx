import Card from "@/components/card";

export default function Home() {
  const cardList = [
    {
      id: 1,
      title: 'Card 1',
      category: 'SI'
    },
    {
      id: 2,
      title: 'Card 2',
      category: 'SI'
    },
    {
      id: 3,
      title: 'Card 3',
      category: 'SI'
    }

  ]
  return (
   <div className="mt-10 mr-[50px]">

    <h1 className="font-bold text-primary text-xl">Recommendation for you</h1>

      <div className="grid grid-cols-1 md:gap-5 md:grid-cols-4 mt-8">
        {cardList.map((item: any , index: number) => (
          <Card title={item.title} category={item.category} key={index}/>
        ) ) }
      </div>

   </div>
  );
}
