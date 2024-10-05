export interface IUser {
  name: string;
  email: string;
  password?: string | null;
  emailVerified?: boolean;
  image?: string;
  role?: "customer" | "admin";
  phone?: string;
  shippingAddress?: string;
  billingAddress?: string;
}

export interface IProduct {
  id?: string;
  name: string;
  description: string;
  category: string;
  total_reviews: number;
  avg_rating: number;
  price: number;
  discount: number;
  stock: number;
  purchase_count: number;
  color: string;
  size: string[];
  image: string[];
}

export interface IMongoProduct {
  _id: string;
  name: string;
  description: string;
  category: string;
  total_reviews: number;
  avg_rating: number;
  price: number;
  discount: number;
  stock: number;
  purchase_count: number;
  color: string;
  size: string[];
  image: string[];
}

export interface ICategory {
  id: string;
  title: string;
  category: string;
  image: string;
}
