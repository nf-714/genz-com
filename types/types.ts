export interface IProduct {
  _id: {
    $oid: string;
  };
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
