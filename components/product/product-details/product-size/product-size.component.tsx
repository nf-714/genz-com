"use client";

import { useState } from "react";

export default function ProductSize() {
  const [selectedSize, setSelectedSize] = useState("M");

  const sizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
  return (
    <>
      <div className="mb-6">
        <h2 className="text-sm font-semibold mb-2">SIZE</h2>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              className={`px-4 py-2 rounded-md ${
                selectedSize === size
                  ? "bg-indigo-500 text-white dark:text-black"
                  : " bg-slate-200 text-slate-900 hover:bg-indigo-300 dark:bg-gray-800 dark:text-white dark:hover:bg-indigo-400"
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
