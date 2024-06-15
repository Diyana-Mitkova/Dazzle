"use client";
import { useState } from "react";
import ProductRow from "../product-row/ProductRow";
import { Plus } from "lucide-react";
import CreateProductPopup from "../create-product-popup/CreateProductPopup";

type ProductTypes = {
  id: number;
  name: string;
  slug: string | number;
  price: number;
  image?: string;
};

type PropTypes = {
  products: ProductTypes[];
};

export default function AdminTable({ products }: PropTypes) {
  const [jewelry, setJewelry] = useState(products);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3000/api/jewelry?deleteId=${id}`, { method: "DELETE" });
      if (!response.ok) {
        throw new Error(`Error deleting product with id ${id}`);
      }
    } catch (error) {
      console.error("Failed to delete the product:", error);
    } finally {
      const updatedJewelry = jewelry.filter((product) => product.id !== id);
      setJewelry(updatedJewelry);
    }
  };
  


  const handleClose = () => {
    setIsPopupOpen(false) 
  }


  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row my-5 justify-end">
        <button onClick={()=>setIsPopupOpen(true)} className="flex flex-row items-center rounded-full gap-1 p-2 bg-gray-100 px-4 pl-2 hover:bg-gray-200">
          <Plus className="w-4 h-4"/> Add new product
        </button>
      </div>
      {jewelry.map((product, index) => {
        return (
          <ProductRow
            key={index}
            id={product.id}
            name={product.name}
            price={product.price}
            slug={product.slug}
            image={product.image}
            handleDelete={handleDelete}
          />
        );
      })}
     { isPopupOpen && <CreateProductPopup closeIt={handleClose}/>}
     
    </div>
  );
}
