/* eslint-disable @typescript-eslint/no-unused-vars */
import { IMongoProduct, IProduct } from "@/types/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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

export const generateArrayConvertedIDForMultipleObjID = (
  array_obj: IMongoProduct[]
): IProduct[] => {
  const convertor = array_obj
    .map((event: IMongoProduct) => {
      return {
        ...event,
        id: event._id.toString(),
      };
    })
    .map((event: IMongoProduct) => {
      const { _id, ...rest } = event;
      return rest;
    });
  return convertor;
};

export const stringToSlung = (name: string) => {
  return name.toLowerCase().replace(/ /g, "-");
};
