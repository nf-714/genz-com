import { products } from "@/data/product";
import { IProduct } from "@/types/types";
import ProductCard from "../product-card/product-card.component";

export default async function ProductLists() {
  return (
    <div className="col-span-3">
      <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-6  lg:space-y-0">
        {products?.map((product: IProduct, i: number) => (
          <ProductCard key={i as number} product={product as IProduct} />
        ))}
      </div>
    </div>
  );
}
