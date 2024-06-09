import Image from "next/image";
import Link from "next/link";

type PropTypes = {
  name: string;
  slug: string | number;
  price: number;
  image?: string;
};

export default function ProductPreviewBox({
  name="missing name",
  slug="/",
  price=0,
  image,
}: PropTypes) {
  return (
    <Link
      href={`/jewelry/${slug}`}
      className=" snap-start  bg-white flex flex-col gap-5 max-w-fit p-3 rounded-2xl mx-auto items-cente border border-gray-300
    "
    >
      <Image
        width={1200}
        height={620}
        alt="header image"
        src="/header.webp"
        className="h-48 w-48 min-w-48 object-cover  rounded-xl"
      />
      <div className="flex flex-col gap-3 max-w-48">
        <p className="truncate line-clamp-3 whitespace-normal min-h-[72px]">
          {name}
        </p>

        <p>
          <span className="font-bold ">{price}</span> лв.
        </p>
      </div>
    </Link>
  );
}
