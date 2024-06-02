import Image from "next/image";
import TextSection from "../components/text-section/TextSection";
import ProductsSection from "../components/products-section/ProductsSection";
import PreviewSection from "../components/preview-section/PrevewSection";


export default function Home() {
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
      <ProductsSection/>
      <PreviewSection/>
    
    </div>
  );
}
