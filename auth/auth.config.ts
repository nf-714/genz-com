import { findUser } from "@/queries/user/user.queries";
import { LoginSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import google from "next-auth/providers/google";

const credentialProvider = {
  credentials: {
    email: {},
    password: {},
  },
  async authorize(credentials: unknown) {
    const validatedFields = LoginSchema.safeParse(credentials);
    if (validatedFields.success) {
      const user = await findUser(credentials.email);
      if (!user || !user.password) return null;

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) return user;

      return null;
    }
  },
};

export default {
  providers: [google, CredentialsProvider(credentialProvider)],
} satisfies NextAuthConfig;
