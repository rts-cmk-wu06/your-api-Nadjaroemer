import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.e5453.mongodb.net/TheCoffeeShop?retryWrites=true&w=majority`
  );
  console.log("Connected to MongoDB");
}
