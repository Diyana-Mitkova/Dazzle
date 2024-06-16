import ProductPreviewBox from "../product-preview-box/ProductPreviewBox";

type ProductsTypes = {
  id: number;
  name: string;
  price: number;
  image_src: string;
};

export default function ProductsGrid({
  products,
}: {
  products: ProductsTypes[];
}) {
  return (
    <div className=" flex flex-col gap-7 mx-auto w-full">
      <div className="flex flex-start gap-3 flex-wrap justify-start items-start">
        {products.map((product, index) => {
          return (
            <ProductPreviewBox
              key={index}
              name={product.name}
              price={product.price}
              slug={product.id}
              image={product.image_src}
            />
          );
        })}
      </div>
    </div>
  );
}
