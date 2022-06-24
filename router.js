import express from "express";
import { createUser } from "./controllers/users.js";
import { createToken } from "./controllers/token.js";
import {
  checkHeader,
  checkToken,
  isAdmin,
  isCorrectUser,
} from "./middleware/authentication.js";
import {
  createProduct,
  getSingleProduct,
  deleteProduct,
} from "./controllers/products.js";
import { createOrder } from "./controllers/orders.js";

const Router = express.Router();

Router.post("/api/v1/products", createProduct);
Router.post("/api/v1/users", createUser);
Router.get("/api/v1/products/:query", getSingleProduct);
Router.delete(
  "/api/v1/products/:query",
  checkHeader,
  checkToken,
  isAdmin,
  deleteProduct
);
Router.post("/auth/token", createToken);

export default Router;
