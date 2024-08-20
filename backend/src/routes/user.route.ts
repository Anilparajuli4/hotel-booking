import express from "express";
import {
  loginUser,
  LogoutUser,
  registerUser,
  validateToken,
} from "../controller/user.controller";
import { check } from "express-validator";
import { verifyToken } from "../middleware/verifiyUser";

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

router.get("/valdate-token", verifyToken, validateToken);
router.post("/logout", verifyToken, LogoutUser);

export default router;
