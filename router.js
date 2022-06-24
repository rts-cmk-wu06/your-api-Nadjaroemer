import express from "express";
import { createUser } from "./controllers/users.js";
import { createPaymentType } from "./controllers/createpaymenttypes.js";
import { createToken } from "./controllers/token.js";
import {
  checkHeader,
  checkToken,
  isAdmin,
  isCorrectUser,
} from "./middleware/authentication.js";
import {
  createProduct,
  getAllProducts,
  getSingleProduct,
  deleteProduct,
} from "./controllers/products.js";
import { createOrder } from "./controllers/orders.js";

const Router = express.Router();

Router.get("/api/v1/products", getAllProducts);
Router.get("/api/v1/products/:query", getSingleProduct);
Router.get("api/v1/orders", createOrder);
Router.post("/api/v1/products", createProduct);
Router.post("/api/v1/users", createUser);
Router.post("/auth/token", createToken);
Router.post(
  "/api/v1/users/:id/payment-methods",
  checkHeader,
  checkToken,
  isCorrectUser,
  createPaymentType
);
Router.delete(
  "/api/v1/products/:query",
  checkHeader,
  checkToken,
  isAdmin,
  deleteProduct
);

export default Router;
