import express from "express";
import { loginUser, registerUser } from "../controller/user.controller";
import { check } from "express-validator";

const router = express.Router();

router.post(
  "/register",
  [
    check("firstName", "first name is required").isString(),
    check("lastName", "last name is required").isString(),
    check("email", "email is required").isEmail(),
    check("Password", "Password with 6 or more character required").isLength({
      min: 6,
    }),
  ],
  registerUser
);

router.post(
  "/login",
  [
    check("email", "email is required").isEmail(),
    check("password", "Password with 6 or more character required").isLength({
      min: 6,
    }),
  ],
  loginUser
);

export default router;
