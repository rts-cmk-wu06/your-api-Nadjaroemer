import mongoose from "mongoose";

export const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  quantity: String,
  description: String,
});

const Product = mongoose.model("Product", productSchema);

export default Product;
