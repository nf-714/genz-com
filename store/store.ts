import { create } from "zustand";

// Define the product interface
interface IProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

// Define the cart state interface
interface ICartState {
  products: IProduct[]; // Cart is an array of products
  totalPrice: number;
  addProduct: (product: IProduct) => void;
  removeProduct: (productId: string) => void;
}

// Zustand store
export const useCartStore = create<ICartState>((set) => ({
  products: [],
  totalPrice: 0,

  // Add a product to the cart (as an array)
  addProduct: (product: IProduct) => {
    set((state) => {
      const updatedProducts = [...state.products, product]; // Simply push the product to the array
      const newTotalPrice = updatedProducts.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      return {
        products: updatedProducts,
        totalPrice: newTotalPrice,
      };
    });
  },

  // Remove a product from the cart
  removeProduct: (productId: string) => {
    set((state) => {
      const updatedProducts = state.products.filter((p) => p.id !== productId);
      const newTotalPrice = updatedProducts.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      return {
        products: updatedProducts,
        totalPrice: newTotalPrice,
      };
    });
  },
}));
