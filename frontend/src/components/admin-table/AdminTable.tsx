import ProductRow from "../product-row/ProductRow";

type ProductTypes = {
  name: string;
  slug: string | number;
  price: number;
  image?: string;
};

type PropTypes = {
  products: ProductTypes[];
};

export default function AdminTable({ products }: PropTypes) {
  return (
    <div className="flex flex-col gap-2">
      {products.map((product, index) => {
        return (
          <ProductRow
            key={index}
            name={product.name}
            price={product.price}
            slug={product.slug}
            image={product.image}
          />
        );
      })}
    </div>
  );
}
