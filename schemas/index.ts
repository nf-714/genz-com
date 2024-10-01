import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const SignupSchema = z.object({
  username: z
    .string()
    .min(1, { message: "Username must be at least 1 character long" })
    .max(15, { message: "Username must be 15 characters or less" })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: "Username can only contain letters, numbers, and underscores",
    })
    .regex(/^[a-zA-Z]/, {
      message: "Username must start with a letter",
    }),
  email: z.string().email(),
  password: z.string().min(6),
});

export const ForgotPasswordSchema = z.object({});
