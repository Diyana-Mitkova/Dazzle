import ProductPreviewBox from "../product-preview-box/ProductPreviewBox";

const products = [
  {
    id: 0,
    name: "Marvel x Pandora Гривна Marvel",
    price: 159,
    slug: "marvel-pandora",
  },
  {
    id: 1,
    name: "Pandora ME Гривна Моята класа",
    price: 160,
    slug: "me-pandora",
  },
  {
    id: 2,
    name: "Pandora Гривна за гравиране",
    price: 179,
    slug: "grav-pandora",
  },
  {
    id: 3,
    name: "Pandora Гривна Нежност и романтика",
    price: 189,
    slug: "love-pandora",
  },
  {
    id: 4,
    name: "Pandora Гривна Магнетизъм",
    price: 199,
    slug: "magnet-pandora",
  },
  {
    id: 5,
    name: "Pandora Гривна Звездопад",
    price: 150,
    slug: "star-pandora",
  },
  {
    id: 6,
    name: "Pandora Гривна Капки от любов",
    price: 149,
    slug: "drop-pandora",
  },
];

export default function ProductsSection() {
  return (
    <div className=" flex flex-col gap-7 mx-auto w-full">
      <div className="max-w-3xl mx-auto w-full">
        <h2 className="text-4xl font-bold">Избрахме специално за теб</h2>
      </div>
      <div className="flex flex-row gap-3 snap-x overflow-y-auto ">
        {products.map((product, index) => {
          return (
            <ProductPreviewBox
              key={index}
              name={product.name}
              price={product.price}
              slug={product.slug}
            />
          );
        })}
      </div>
    </div>
  );
}
