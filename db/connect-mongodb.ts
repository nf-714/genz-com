import mongoose from "mongoose";

export async function connectDB() {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const conn = await mongoose.connect(process.env.MONGO_URI as string);

    console.log("connected");
  } catch (err) {
    console.log(err);
  }
}
