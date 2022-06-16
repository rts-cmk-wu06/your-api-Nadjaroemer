import express from "express";
import Router from "./router.js";

const app = express();

app.use(Router);

app.listen(1424, function (error) {
  if (error) {
    console.log("Error", error);
    process.exit(1);
  }
  console.log("Server is running on http://localhost:1424");
});

app.use(Router);
