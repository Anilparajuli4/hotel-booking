import { Request, Response } from "express";
import User from "../model/user.model";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";
import bcryptjs from "bcryptjs";

export const registerUser = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty) {
    return res.status(400).json({
      message: errors.array(),
    });
  }
  try {
    const { email } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "user alerady exists",
      });
    }
    user = new User(req.body);
    await user.save();

    const token = await jwt.sign(
      { userId: user._id },
      process.env.JWT as string,
      {
        expiresIn: "1d",
      }
    );

    return res
      .status(200)
      .cookie("auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "producton",
        maxAge: 86400000,
      })
      .json("register successfully");
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error in registerUser " + error,
    });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array() });
  }
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "user doesnot exists",
      });
    }
    const ispasswordCorrect = bcryptjs.compare(password, user.password);
    if (!ispasswordCorrect) {
      return res.status(400).json({
        message: "invalid credential",
      });
    }
    const token = jwt.sign({ userId: user._id }, process.env.jwt as string, {
      expiresIn: "1d",
    });
    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "producton",
      maxAge: 86400000,
    });
    return res.status(200).json({
      userId: user._id,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error in registerUser " + error,
    });
  }
};
