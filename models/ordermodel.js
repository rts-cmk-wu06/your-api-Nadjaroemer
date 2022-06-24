import mongoose from "mongoose";

export const orderSchema = new mongoose.Schema({
  id: String,
  orderedBy: String,
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
