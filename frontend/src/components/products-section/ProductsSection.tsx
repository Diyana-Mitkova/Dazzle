import ProductPreviewBox from "../product-preview-box/ProductPreviewBox";

type ProductsTypes = {
  id: number;
  name: string;
  price: number;
  image?: string;
};

export default function ProductsSection({products, withTitle = true}: {products: ProductsTypes[]; withTitle?: boolean}) {

  return (
    <div className=" flex flex-col gap-7 mx-auto w-full">
      { withTitle && <div className="max-w-3xl mx-auto w-full">
        <h2 className="text-4xl font-bold">Избрахме специално за теб</h2>
      </div>}
      <div className="flex flex-row gap-3 snap-x overflow-y-auto ">
        {products.map((product, index) => {
          if (index > 6) return null
          return (
            <ProductPreviewBox
              key={index}
              name={product.name}
              price={product.price}
              slug={product.id}
            />
          );
        })}
      </div>
    </div>
  );
}
