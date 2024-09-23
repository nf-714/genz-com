import ProductFilter from "@/components/product/product-filter/product-filter.component";
import ProductLists from "@/components/product/product-lists/product-lists.component";

export default function ProductPage() {
  return (
    <>
      <div className="pt-5 pb-9 text-center flex flex-col items-center justify-center">
        <h1 className="text-green text-lg md:text-xl lg:text-5xl lg:font-semibold">
          Shops on LWSkart
        </h1>
        <p className="text-gray-200 text-sm">Artistic Talent Meets Outfits</p>
      </div>
      <div className="container grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start justify-center w-screen">
        <ProductFilter />
        <ProductLists />
      </div>
    </>
  );
}
