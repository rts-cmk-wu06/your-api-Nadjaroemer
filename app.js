import express from "express";
const app = express();
const Router = express.Router();

Router.get("/", function (request, response) {
  respond.send("Hello, World");
});

app.use(Router);

app.listen(1337, function (error) {
  if (error) {
    console.log("Error", error);
    process.exit(1);
  }
  console.log("Server is running on http://localhost:1424");
});

app.use(Router);
