import ProductFilter from "@/components/product/product-filter/product-filter.component";
import ProductLists from "@/components/product/product-lists/product-lists.component";
import { Separator } from "@/components/ui/separator";

export default function ProductPage() {
  return (
    <>
      <div className="w-screen flex flex-col items-center justify-center">
        <ProductFilter />
        <Separator />
        <ProductLists />
      </div>
    </>
  );
}
