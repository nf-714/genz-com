import { IUser } from "@/types/types";
import mongoose, { Schema } from "mongoose";

const schema = new Schema<IUser>(
  {
    name: {
      required: true,
      type: String,
    },
    email: {
      required: true,
      unique: true,
      type: String,
    },
    password: {
      required: false,
      type: String,
      default: null,
    },
    emailVerified: {
      required: false,
      type: Boolean,
      default: null,
    },
    role: {
      required: true,
      type: String,
      default: "customer",
    },
    phone: {
      required: false,
      type: String,
      default: null,
    },
    shippingAddress: {
      required: false,
      type: String,
      default: null,
    },
    billingAddress: {
      required: false,
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

export const Users =
  mongoose.models?.users ?? mongoose.model<IUser>("users", schema);
