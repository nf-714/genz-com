/* eslint-disable @typescript-eslint/no-explicit-any */
import clientPromise from "@/db/adapter-mongodb";
import { findUser } from "@/queries/user/user.queries";
import { LoginSchema } from "@/schemas";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import google from "next-auth/providers/google";

const credentialProvider = {
  credentials: {
    email: {},
    password: {},
  },
  async authorize(credentials: {
    email: string;
    password: string;
  }): Promise<any> {
    const validatedFields = LoginSchema.safeParse(credentials);
    if (validatedFields.success) {
      const user = await findUser(credentials.email);
      if (!user || !user.password) return null;

      const passwordMatch = await bcrypt.compare(
        credentials.password,
        user.password
      );

      if (passwordMatch) return user;

      return null;
    }
  },
};

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [google, CredentialsProvider(credentialProvider as any)],
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: "jwt",
  },
});
