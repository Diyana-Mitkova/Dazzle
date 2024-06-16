import ProductsGrid from "@/src/components/products-grid/ProductsGrid";

export default async function Jewelry() {

  const res = await fetch("http://localhost:3000/api/jewelry", { cache: 'no-store' }); // Make sure to use the correct URL
  const jewelry = await res.json();

    return (
      <ProductsGrid products={jewelry} />
    );
  }
  