import { request } from "express";
import jwt from "jsonwebtoken";
import User from "../models/usermodel.js";

export function checkHeader(request, response, next) {
  if (!request.headers.authentication) {
    response.status(401).end();
    return;
  }
  next();
}

export function checkToken(request, response, next) {
  if (!request.headers.authentication.includes("Bearer")) {
  }
  //fjerner/dekrypterer token
  const token = request.headers.authorization.replace("Bearer ", "");

  //verify
  if (!jwt.verify(token, process.env.TOKEN_SECRET)) {
    response.status(403).end();
    return;
  }
  next();
}

export function isAdmin(request, response, next) {
  const token = request.headers.authorization.replace("Bearer ", "");

  const decryptedToken = jwt.verify(token, process.env.TOKEN_SECRET);
  if (decryptedToken.data.role !== "admin") {
    response.status(403).end();
    return;
  }

  next();
}

export function isCorrectUser(request, response, next) {
  const token = request.headers.authorization.replace("Bearer ", "");
  const decryptedToken = jwt.verify(token, process.env.TOKEN_SECRET);

  const id = request.params.id;

  if (decryptedToken.data.role !== "customer") {
    response.status(403).end();
    return;
  }

  if (decryptedToken.data.id !== "id") {
    response.status(403).end();
    return;
  }
  next();
}
