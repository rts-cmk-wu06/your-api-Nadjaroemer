import express from "express";
import { createProduct, getSingleProduct } from "./controllers/products.js";

const Router = express.Router();

Router.post("/api/v1/products", createProduct);
Router.get("/api/v1/products/:query", getSingleProduct);

export default Router;
