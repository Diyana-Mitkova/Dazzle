"use client";
import { X } from "lucide-react";
import Image from "next/image";

export default function CreateProductPopup({
  closeIt,
}: {
  closeIt: () => void;
}) {
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
              <p className="text-sm" >Name</p>
              <input   
                className="rounded-md text-sm border border-gray-200 bg-gray-100 p-2 w-full"
                type="text"
                placeholder="Add name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm" >Description</p>
              <textarea
                className="rounded-md text-sm border border-gray-200 bg-gray-100 p-2 w-full"
                placeholder="Add name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm" >Price</p>
              <input
                className="rounded-md text-sm border border-gray-200 bg-gray-100 p-2 w-full"
                type="text"
                placeholder="Add name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm" >Image URL</p>
              <input
                className="rounded-md text-sm border border-gray-200 bg-gray-100 p-2 w-full"
                type="text"
                placeholder="Add name"
              />
            </div>
          </div>
          <div>
            <div className="w-full flex flex-row items-center justify-center  bg-gray-100  aspect-square rounded-md">
              <p className="text-gray-400" >No image</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
