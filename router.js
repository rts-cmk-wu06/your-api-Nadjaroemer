import express from "express";
import {
  createProduct,
  getSingleProduct,
  deleteProduct,
} from "./controllers/products.js";

const Router = express.Router();

Router.post("/api/v1/products", createProduct);
Router.get("/api/v1/products/:query", getSingleProduct);
Router.delete("/api/v1/products/:query", deleteProduct);

export default Router;
