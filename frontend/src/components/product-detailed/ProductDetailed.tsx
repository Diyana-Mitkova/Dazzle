import Image from "next/image";

type Jewelry = {
  id: number;
  name: string;
  description: string;
  price: number;
  image_src: string;
};
export default function ProductDetailed({ product }: { product: Jewelry }) {
  return (
    <div className="grid grid-cols-[35%_1fr] gap-10  ">
      <div>
        <Image
          width={1200}
          height={620}
          alt="header image"
          src={product.image_src}
         className="w-full aspect-square object-cover  rounded-xl "
        />
      </div>
      <div className=" bg-white flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <h1 className="text-[32px]">{product.name}</h1>

          <p className="">{product.description}</p>

          <p>
            <span className="font-bold ">{product.price}</span> лв.
          </p>
        </div>
      </div>
    </div>
  );
}
