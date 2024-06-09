import ProductsSection from "@/src/components/products-section/ProductsSection";


export default async function Admin() {

  const res = await fetch("http://localhost:3000/api/jewelry", { cache: 'no-store' }); // Make sure to use the correct URL
  const jewelry = await res.json();

    return (
      <ProductsSection products={jewelry} withTitle={false} />
    );
  }
  