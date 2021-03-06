import bcrypt from "bcrypt";
import User, { PaymentType } from "../models/usermodel.js";

export async function createUser(request, response) {
  const salt = bcrypt.genSaltSync(10);
  const password = bcrypt.hashSync(request.body.password, salt);

  const newUser = new User();
  newUser.username = request.body.username;
  newUser.password = password;
  newUser.role = request.body.role;

  try {
    const result = await newUser.save();
    response.status(201).json(result);
  } catch (error) {
    console.log(error.message);
    if (error.message.toLowerCase().includes("user validation failed")) {
      response.status(400).end();
      return;
    }
    if (error.message.toLowerCase().includes("duplicate key error")) {
      response.status(409).end();
      return;
    }

    response.status(500).end();
  }
}
