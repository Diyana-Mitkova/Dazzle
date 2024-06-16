import ProductDetailed from "@/src/components/product-detailed/ProductDetailed";

type PageProps = { params: { id: string } };

type Jewelry = {
  id: number;
  name: string;
  description: string;
  price: number;
  image_src: string;
};

export default async function Page({ params }: PageProps) {

  const res = await fetch(`http://localhost:3000/api/single/${params.id}`, { cache: 'no-store' }); // Make sure to use the correct URL
  const jewelry: Jewelry = await res.json();

  return <ProductDetailed product={jewelry}/>

}
