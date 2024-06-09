import Image from "next/image";
import TextSection from "../components/text-section/TextSection";
import ProductsSection from "../components/products-section/ProductsSection";
import PreviewSection from "../components/preview-section/PrevewSection";


export default async function Home() {

  const res = await fetch("http://localhost:3000/api/jewelry", { cache: 'no-store' }); // Make sure to use the correct URL
  const jewelry = await res.json();

  return (
    <div className="flex flex-col gap-10">
      <Image
        width={1200}
        height={620}
        alt="header image"
        src="/header.webp"
        className="rounded-xl"
      />
      <TextSection />
      <ProductsSection products={jewelry}  />
      <PreviewSection/>
    
    </div>
  );
}
