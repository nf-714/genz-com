import { IProduct } from "@/types/types";

import mongoose, { Schema } from "mongoose";

// Define the schema
const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    total_reviews: {
      type: Number,
      default: 0,
    },
    avg_rating: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      default: 0,
    },
    stock: {
      type: Number,
      default: 0,
    },
    purchase_count: {
      type: Number,
      default: 0,
    },
    color: {
      type: String,
      required: true,
    },
    size: {
      type: [String],
      required: true,
      enum: ["XXS", "XS", "S", "M", "L", "XL", "2XL", "3XL"],
    },
    image: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

// Create and export the model

export const products =
  mongoose.models?.products ??
  mongoose.model<IProduct>("products", productSchema);

export default products;
