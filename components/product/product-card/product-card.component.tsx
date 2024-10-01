import { discountedPriceValue, stockCalculation } from "@/lib/utils";
import { IProduct } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }: { product: IProduct }) {
  const { id, name, image, price, category, discount, stock } = product;

  const { newPrice } = discountedPriceValue(price, discount);
  const status = stockCalculation(stock);
  return (
    <div className="group relative">
      <Link href={`/product/${id}`}>
        <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
          <Image
            src={image[0]}
            alt={name}
            className="h-full w-full object-cover object-center"
            width={700}
            height={700}
          />
        </div>
      </Link>

      <h3 className="mt-6 text-sm flex justify-between cursor-default">
        <span className="text-slate-700 dark:text-indigo-400">
          <Link
            href={`/category/${category.toLowerCase()}`}
            className="hover:underline"
          >
            {category}
          </Link>
        </span>
        <span
          className={`${
            stock > 5
              ? "text-emerald-600 font-semibold dark:text-emerald-500"
              : "text-red-500"
          }`}
        >
          {status}
        </span>
      </h3>
      <Link href={`/product/${id}`} className="flex justify-between">
        <p className="text-base font-semibold text-indigo-500 dark:text-slate-200">
          {name}
        </p>
        {/* Discount dite hbe */}
        <div className="flex justify-center items-center">
          <p className="text-base text-right text-slate-700  dark:text-slate-200">
            ${newPrice}
          </p>
        </div>
      </Link>
    </div>
  );
}
