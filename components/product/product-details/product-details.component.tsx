"use client";

import { findProductById } from "@/lib/utils";
import { IProduct } from "@/types/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

import { useEffect, useState } from "react";
import ProductBreadcumb from "../breadcumb/breadcumb.component";

export default function ProductDetails({ id }: { id: string }) {
  const [selectedColor, setSelectedColor] = useState("Black");
  const [selectedSize, setSelectedSize] = useState("M");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [viewport, setViewport] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    setIsMobile(viewport.width <= 952 && viewport.height <= 768);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [viewport.height, viewport.width]);

  const product = findProductById(id);
  const { name, image, price, description, category } = product as IProduct;

  const colors = ["Black", "White", "Blue"];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];

  const relatedProducts = [
    { name: "Acme T-Shirt", price: "$20.00", image: "/placeholder.svg" },
    { name: "Acme Prism T-Shirt", price: "$25.00", image: "/placeholder.svg" },
    { name: "Acme Hoodie", price: "$50.00", image: "/placeholder.svg" },
    { name: "Acme Cap", price: "$20.00", image: "/placeholder.svg" },
    { name: "Acme Baby Cap", price: "$10.00", image: "/placeholder.svg" },
  ];

  const handleNextImage = () => {
    if (currentImageIndex === 3) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePreviousImage = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(3);
    } else {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div className="min-h-screen text-white">
      <main className="container mx-auto lg:px-6 lg:py-12 md:px-6 md:py-12">
        <div className="ml-10 text-sm lg:mb-5">
          <ProductBreadcumb id={id} productName={name} />
        </div>
        <div className="flex md:flex-row flex-col justify-center items-center md:items-start lg:space-x-12 mx-10 md:mx-0 lg:mx-0">
          <div className="lg:w-1/2 md:w-1/2 mx-40">
            <div className="relative aspect-square flex justify-center items-center mb-4">
              <Image
                src={image[currentImageIndex]}
                alt="Product image"
                width={isMobile ? 700 : 350}
                height={isMobile ? 300 : 350}
                className="object-contain w-full h-full"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />

              <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                <button className="bg-black bg-opacity-50 p-2 rounded-full">
                  <ChevronLeft
                    className="h-6 w-6"
                    onClick={handlePreviousImage}
                  />
                </button>
                <button className="bg-black bg-opacity-50 p-2 rounded-full">
                  <ChevronRight className="h-6 w-6" onClick={handleNextImage} />
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center space-x-4">
              {[1, 2, 3, 4].map((_, index) => (
                <div
                  key={index}
                  className={`w-24 h-24 rounded-md overflow-hidden ${
                    index === currentImageIndex ? "ring-2 ring-blue-500" : ""
                  }`}
                >
                  <Image
                    src={image[index]}
                    alt={`Thumbnail ${index + 1}`}
                    width={96}
                    height={96}
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-indigo-500">
              {name}
            </h1>
            <h3 className="text-zinc-700 dark:text-white font-extralight  mb-6">
              {category}
            </h3>
            <p className="text-zinc-700 dark:text-white lg:text-2xl md:text-xl text-lg font-bold mb-6">
              ${price} USD
            </p>

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

            <div>
              <h2 className="lg:text-base md:text-xl text-sm font-semibold text-indigo-500  mb-2">
                DESCRIPTION
              </h2>
              <p className="text-lg text-gray-400 mb-6">{description}</p>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-md font-semibold text-lg transition duration-300">
              Add To Cart
            </button>
          </div>
        </div>

        <section className="mt-24">
          <h2 className="text-3xl font-bold mb-8">Related Products</h2>
          <div className="grid grid-cols-5 gap-6">
            {relatedProducts.map((product, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={240}
                  height={240}
                  objectFit="cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-1">{product.name}</h3>
                  <p className="text-blue-500">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
