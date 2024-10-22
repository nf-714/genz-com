"use server";

import { signIn, signOut } from "@/auth/auth";
import { generateArrayConvertedIDForMultipleObjID } from "@/lib/utils";
import {
  getAllProducts,
  getProductById,
} from "@/queries/products/products.queries";
import { LoginSchema } from "@/schemas";

import { products } from "@/data/product";
import prisma from "@/lib/prisma";
import { createUser, findUser } from "@/queries/user/user.queries";
import { SignupSchema } from "@/schemas";
import { IMongoProduct } from "@/types/types";
import { z } from "zod";

export const signInWithGooge = async () => {
  await signIn("google", {
    callbackUrl: "http://localhost:3000/",
    redirect: true,
  });
  //redirect("/shop");
};

export const signOutAction = async () => {
  await signOut();
  //redirect("/login");
};

export const createProductBulks = async () => {
  try {
    const data = await prisma.product.createMany({ data: products });

    return { success: "Product bulk created successfully" };
  } catch (error) {
    console.log(error);
    return { error: "Error on creating product bulk" };
  }
};

export const getProducts = async () => {
  const products = await getAllProducts();
  if (products) {
    return generateArrayConvertedIDForMultipleObjID(
      products as IMongoProduct[]
    );
  } else {
    // Handle the case where products is undefined
    return []; // or whatever is appropriate in this case
  }
};

export const loginUser = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }
  try {
    const result = await signIn("credentials", values);
    return { success: "Login Successfully" };
  } catch {
    return { error: "Invalid credentials" };
  }
};

export const registerUser = async (values: z.infer<typeof SignupSchema>) => {
  const validatedFields = SignupSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  try {
    const { username, email, password } = validatedFields.data;

    // Check if user already exists
    const existingUser = await findUser(email);
    if (existingUser) {
      return { error: "User with this email already exists" };
    }

    // If user doesn't exist, create a new one
    const newUser = await createUser({ username, email, password });
    return { success: "User registered successfully", user: newUser };
  } catch (error) {
    console.error("Error registering user:", error);
    return { error: "Failed to register user. Please try again." };
  }
};

export const findProductById = async (id: string) => {
  const product = await getProductById(id);
  return product;
};
