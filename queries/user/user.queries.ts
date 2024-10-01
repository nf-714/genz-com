import { Users } from "@/models/users/user.model";
import bcrypt from "bcryptjs";

export async function createUser(data: {
  username: string;
  email: string;
  password: string;
}) {
  try {
    // Hash the password
    const saltRounds = 10;

    const hashedPassword = await bcrypt.hash(data.password, saltRounds);

    const newUser = await Users.create({
      name: data.username,
      email: data.email,
      password: hashedPassword,
    });

    return newUser;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

export async function findUser(email: string) {
  try {
    const user = await Users.findOne({ email });
    return user;
  } catch (error) {
    console.error("Error finding user:", error);
    throw error;
  }
}
