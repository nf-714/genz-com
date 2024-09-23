import { products } from "@/data/product";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const findProductById = (id: string) => {
  const product = products.find((product) => product._id.$oid === id);
  return product;
};

export const discountedPriceValue = (price: number, discount: number) => {
  const roundedPrice = Math.round(price);
  const roundedDiscount = Math.round(discount);

  const afterDiscount = Math.floor(roundedPrice * (roundedDiscount / 100));
  const newPrice = Math.floor(roundedPrice - afterDiscount);
  return { afterDiscount, newPrice };
};

export const stockCalculation = (stock: number) => {
  if (stock > 5) {
    return "In Stock";
  } else if (stock === 0) {
    return "Out of Stock";
  } else {
    return "Low Stock";
  }
};
