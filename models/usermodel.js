import mongoose from "mongoose";

export const creditcardSchema = mongoose.Schema({
  name: {
    type: String,
  },
  number: {
    type: Number,
  },
  exp: {
    type: String,
  },
  cvc: {
    type: String,
  },
});

export const paymentTypeSchema = mongoose.Schema({
  type: {
    type: String,
    required: [true, "You must provdide a payment type"],
  },
  creditcard: creditcardSchema,
  paypal: {
    type: String,
  },
});

const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: [true, "A username is required"],
  },

  password: {
    type: String,
    required: [true, "Password is required"],
  },

  paymentTypes: [{ type: mongoose.Types.ObjectId, ref: "PaymentType" }],

  role: {
    type: String,
    required: [true, "You must provide a role"],
    default: "customer",
  },
});

const User = mongoose.model("User", userSchema);
export const PaymentType = mongoose.model("PaymentType", paymentTypeSchema);
export default User;
