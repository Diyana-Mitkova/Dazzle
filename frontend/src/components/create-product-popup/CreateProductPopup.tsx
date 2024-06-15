"use client";
import { Plus, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function CreateProductPopup({
  closeIt,
  handleCreate,
}: {
  closeIt: () => void;
  handleCreate: ({
    name,
    description,
    price,
    imageURL,
  }: {
    name: string;
    description: string;
    price: string;
    imageURL: string;
  }) => Promise<any>;
}) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");

  return (
    <div className=" z-30 absolute top-0 left-0 flex bg-gray-600/80 items-center justify-center w-full h-full">
      <div className="min-w-[700px] bg-white p-3 rounded-xl ">
        <div className="flex flex-row items-center justify-between pb-3 border-b border-gray-100 mb-3">
          <p>Create product</p>
          <button
            onClick={closeIt}
            className="flex flex-row items-center rounded-full gap-1 p-2 bg-gray-100 hover:bg-gray-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-[60%_1fr] gap-4 ">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-sm">Name</p>
              <input
                value={name}
                className="rounded-md text-sm border border-gray-200 bg-gray-100 p-2 w-full"
                type="text"
                onChange={(event: any) => setName(event.target.value)}
                placeholder="Add name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm">Description</p>
              <textarea
                onChange={(event: any) => setDescription(event.target.value)}
                value={description}
                className="rounded-md text-sm border border-gray-200 bg-gray-100 p-2 w-full"
                placeholder="Add description"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm">Price</p>
              <input
                value={price}
                className="rounded-md text-sm border border-gray-200 bg-gray-100 p-2 w-full"
                type="number"
                onChange={(event: any) => setPrice(event.target.value)}
                placeholder="Add price"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm">Image URL</p>
              <input
                value={imageURL}
                className="rounded-md text-sm border border-gray-200 bg-gray-100 p-2 w-full"
                type="text"
                onChange={(event: any) => setImageURL(event.target.value)}
                placeholder="Add image URL"
              />
            </div>
            <button
              onClick={() => handleCreate({
                name,
                description,
                price,
                imageURL,
              })}
              className="flex flex-row max-w-fit text-white items-center rounded-full gap-1 p-2 bg-pink-500 px-4 pl-2 hover:bg-pink-600"
            >
              <Plus className="w-4 h-4" /> Create product
            </button>
          </div>
          <div>
            {imageURL.length > 0 ? (
              <Image
                width={1200}
                height={620}
                alt="header image"
                src={imageURL}
                className="w-full aspect-square object-cover  rounded-xl "
              />
            ) : (
              <div className="w-full flex flex-row items-center justify-center  bg-gray-100  aspect-square rounded-xl">
                <p className="text-gray-400">No image</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
