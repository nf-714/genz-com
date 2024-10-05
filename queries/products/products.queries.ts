import { connectDB } from "@/db/connect-mongodb";
import Product from "@/models/products/products.model";

// get all products
export const getAllProducts = async () => {
  try {
    await connectDB();
    const products = await Product.find().lean().exec();
    console.log(products);
    return products;
  } catch (err) {
    console.log("Error fetching products", err);
  }
};

// get product by id
export const getProductById = async (id: string) => {
  try {
    await connectDB();
    const product = await Product.findById(id);
    return product;
  } catch (err) {
    console.log("Error fetching product by id", err);
  }
};
