interface CardTypes {
  title: string;
  category: string;
}

export default function Card ({ title, category }: CardTypes) {
  return (
      <div className="bg-white rounded-lg w-full transition-all ease-in-out duration-500 hover:border-primary border shadow-lg">
          <div className="flex flex-col space-y-6 p-3">
              <h1 dangerouslySetInnerHTML={{ __html: title }} />
              <p className="ml-auto text-sm">{category}</p>
          </div>
      </div>
  );
}
