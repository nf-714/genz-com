"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProductImageSliderComponent({
  image,
}: {
  image: string[];
}) {
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

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % image.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + image.length) % image.length
    );
  };
  return (
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
            <ChevronLeft className="h-6 w-6" onClick={handlePreviousImage} />
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
  );
}
