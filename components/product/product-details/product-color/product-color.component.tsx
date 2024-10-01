"use client";
import { useState } from "react";

export default function ProductColor() {
  const [selectedColor, setSelectedColor] = useState("Black");
  const colors = ["Black", "White", "Blue"];
  return (
    <div className="mb-6">
      <h2 className="text-sm font-semibold mb-2">COLOR</h2>
      <div className="flex space-x-3">
        {colors.map((color) => (
          <button
            key={color}
            className={`w-10 h-10 text-sm rounded-full ${
              color === "Black"
                ? "bg-gray-900"
                : color === "White"
                ? "bg-white"
                : "bg-indigo-500"
            } ${
              selectedColor === color
                ? "ring-2 ring-indigo-500 ring-offset-2 ring-offset-black"
                : ""
            }`}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </div>
    </div>
  );
}
