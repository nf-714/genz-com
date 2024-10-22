import { IProduct } from "@/types/types";
import ProductCard from "../product-card/product-card.component";

export default async function ProductLists() {
  const data: IProduct[] = await fetch(`${process.env.API_URL}/products`);
  const products = await data.json();

  return (
    <>
      <div className="col-span-3">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products?.map((product: IProduct, i: number) => (
            <ProductCard key={i as number} product={product as IProduct} />
          ))}
        </div>
      </div>
    </>
  );
}
