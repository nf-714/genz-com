import { IProduct } from "@/types/types";

import ProductBreadcumb from "../breadcumb/breadcumb.component";
import ProductImageSliderComponent from "./product-image-slider/product-image-slider.component";
import ProductSize from "./product-size/product-size.component";

export default async function ProductDetails({ id }: { id: string }) {
  const data = await fetch(`${process.env.API_URL}/products/${id}`);
  const product = await data.json();
  const { name, image, price, description, category } = product as IProduct;
  /*
  const cart = useCartStore((state) => state.products);
  console.log(cart);
  
  const handleClickAddToCart = () => {
    const product = {
      id: id,
      name: name,
      price: price,
      quantity: 1,
    };
    /*
    const addProductToCart = useCartStore((state) => {
      state.addProduct(product);
    });
  };*/

  return (
    <div className="min-h-screen text-white">
      <main className="container mx-auto lg:px-6 lg:py-12 md:px-6 md:py-12">
        <div className="ml-10 text-sm lg:mb-5">
          <ProductBreadcumb id={id} productName={name} />
        </div>
        <div className="flex md:flex-row flex-col justify-center items-center md:items-start lg:space-x-12 mx-10 md:mx-0 lg:mx-0">
          <ProductImageSliderComponent image={image} />

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

            <ProductSize />

            <div>
              <h2 className="lg:text-base md:text-xl text-sm font-semibold text-indigo-500  mb-2">
                DESCRIPTION
              </h2>
              <p className="text-lg text-gray-400 mb-6">{description}</p>
            </div>

            <button
              /*onClick={handleClickAddToCart}*/
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-md font-semibold text-lg transition duration-300"
            >
              Add To Cart
            </button>
          </div>
        </div>

        <section className="mt-24">
          <h2 className="text-3xl font-bold mb-8">Related Products</h2>
          <div className="grid grid-cols-5 gap-6">No</div>
        </section>
      </main>
    </div>
  );
}
