import { Pen, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type PropTypes = {
  id: number;
  name: string;
  slug: string | number;
  price: number;
  image: string;
  handleDelete:(id: number)=>Promise<void>;
};

export default function ProductRow({
  id ,
  name = "missing name",
  slug = "/",
  price = 0,
  image,
  handleDelete
}: PropTypes) {
  return (
    <div className="bg-white border flex flex-row items-center justify-between p-3 border-gray-300 rounded-2xl hover:bg-pink-50">
      <Link
        href={`/jewelry/${id}`}
        className="max-w-fit flex flex-row gap-5  items-center"
      >
        <div className="flex flex-row gap-5 items-center">
          <Image
            width={1200}
            height={620}
            alt="header image"
            src={image}
            className="h-14 w-14 min-w-14 object-cover  rounded-xl"
          />

          <p className="">{name}</p>
        </div>
      </Link>
      <div className="flex flex-row gap-4 items-center">
        <p>
          <span className="font-bold ">{price}</span> лв.
        </p>
        <button className="p-2 rounded-full bg-gray-100 hover:bg-pink-200 hover:text-pink-600">
          <Pen className="w-4 h-4" />
        </button>
        <button onClick={()=>handleDelete(id)} className="p-2 rounded-full bg-gray-100 hover:bg-pink-200 hover:text-pink-600">
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
