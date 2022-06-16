import express from "express";
import { allProducts } from "./controllers/products.js";

const Router = express.Router();

Router.get("/api/v1/products", allProducts);

export default Router;
