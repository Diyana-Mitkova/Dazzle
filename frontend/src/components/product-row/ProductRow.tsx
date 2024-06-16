import { Pen, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type PropTypes = {
  product: Jewelry;
  handleDelete: (id: number) => Promise<void>;
  handleEditOpen: (prodict: Jewelry) => void;
};

type Jewelry = {
  id: number;
  name: string;
  description: string;
  price: number;
  image_src: string;
};

export default function ProductRow({
  product,
  handleEditOpen,
  handleDelete,
}: PropTypes) {
  return (
    <div className="bg-white border flex flex-row items-center justify-between p-3 border-gray-300 rounded-2xl hover:bg-pink-50">
      <Link
        href={`/jewelry/${product.id}`}
        className="max-w-fit flex flex-row gap-5  items-center"
      >
        <div className="flex flex-row gap-5 items-center">
          <Image
            width={1200}
            height={620}
            alt="header image"
            src={product.image_src}
            className="h-14 w-14 min-w-14 object-cover  rounded-xl"
          />

          <p className="">{product.name}</p>
        </div>
      </Link>
      <div className="flex flex-row gap-4 items-center">
        <p>
          <span className="font-bold ">{product.price}</span> лв.
        </p>
        <button
          onClick={() => handleEditOpen(product)}
          className="p-2 rounded-full bg-gray-100 hover:bg-pink-200 hover:text-pink-600"
        >
          <Pen className="w-4 h-4" />
        </button>
        <button
          onClick={() => handleDelete(product.id)}
          className="p-2 rounded-full bg-gray-100 hover:bg-pink-200 hover:text-pink-600"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
