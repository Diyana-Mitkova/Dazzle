"use client";
import { useState } from "react";
import ProductRow from "../product-row/ProductRow";
import { Plus } from "lucide-react";
import CreateProductPopup from "../create-product-popup/CreateProductPopup";
import EditProductPopup from "../edit-product-popup/EditProductPopup";

type Jewelry = {
  id: number;
  name: string;
  description: string;
  price: number;
  image_src: string;
};

type PropTypes = {
  products: Jewelry[];
};

export default function AdminTable({ products }: PropTypes) {
  const [jewelry, setJewelry] = useState<Jewelry[]>(products);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [selectEditProduct, setSelectedEditProduct] = useState<Jewelry | null>(
    null
  );

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/jewelry?deleteId=${id}`,
        { method: "DELETE" }
      );
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

  const handleCreate = async ({
    name,
    description,
    price,
    imageURL,
  }: {
    name: string;
    description: string;
    price: string;
    imageURL: string;
  }) => {
    try {
      const response: any = await fetch(`http://localhost:3000/api/jewelry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          description,
          price: Number(price),
          image_src: imageURL,
        }),
      });
      if (!response.ok) {
        throw new Error(`Error creating product with name ${name}`);
      }
      const data = await response.json();

      setJewelry([
        ...jewelry,
        {
          name: data.jewelry.name,
          id: Number(data.jewelry.id),
          price: Number(data.jewelry.price),
          image_src: data.jewelry.image_src,
          description: data.jewelry.description,
        },
      ]);
      setIsPopupOpen(false);
    } catch (error) {
      console.error("Failed to crate the product:", error);
    }
  };

  const handleEdit = async ({
    id,
    name,
    description,
    price,
    image_src,
  }: {
    id: number;
    name: string;
    description: string;
    price: number;
    image_src: string;
  }) => {
    try {
      const response: any = await fetch(`http://localhost:3000/api/jewelry/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          description,
          price: Number(price),
          image_src,
        }),
      });
      if (!response.ok) {
        throw new Error(`Error creating product with name ${name}`);
      }
      const data = await response.json();

      setJewelry((prevJewelry) => 
        prevJewelry.map((item) => (item.id === id ? data.jewelry : item))
      );
      
      setSelectedEditProduct(null);
    } catch (error) {
      console.error("Failed to crate the product:", error);
    }
  };

  const handleClose = () => {
    setIsPopupOpen(false);
  };
  const handleEditOpen = (product: Jewelry) => {
    setSelectedEditProduct(product);
  };

  const handleCloseEdit = () => {
    setSelectedEditProduct(null);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row my-5 justify-end">
        <button
          onClick={() => setIsPopupOpen(true)}
          className="flex flex-row items-center rounded-full gap-1 p-2 bg-gray-100 px-4 pl-2 hover:bg-gray-200"
        >
          <Plus className="w-4 h-4" /> Add new product
        </button>
      </div>
      {jewelry.map((product, index) => {
        return (
          <ProductRow
            key={index}
            product={product}
            handleDelete={handleDelete}
            handleEditOpen={handleEditOpen}
          />
        );
      })}
      {isPopupOpen && (
        <CreateProductPopup closeIt={handleClose} handleCreate={handleCreate} />
      )}
      {selectEditProduct && (
        <EditProductPopup
          closeIt={handleCloseEdit}
          handleEdit={handleEdit}
          product={selectEditProduct}
        />
      )}
    </div>
  );
}
