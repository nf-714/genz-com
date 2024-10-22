import Product from "@/models/products/products.model";

// get all products
export const getAllProducts = async () => {
  try {
    const products = await Product.find().lean().exec();
    console.log(Product.products);
    return products;
  } catch (err) {
    console.log("Error fetching products", err);
  }
};

// get product by id
export const getProductById = async (id: string) => {
  try {
    const product = await Product.findById(id);
    return product;
  } catch (err) {
    console.log("Error fetching product by id", err);
  }
};
