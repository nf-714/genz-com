import prisma from "@/lib/prisma";

export const getAllProducts = async () => {
  const products = await prisma.product.findMany();
  return products;
};

export async function getProductById(productId: string) {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: productId, // Assuming 'id' is the unique identifier for your product
      },
    });

    if (!product) {
      return { error: "product not found" };
    }

    return product;
  } catch (error) {
    return { error: "Error fetching product" };
  }
}
