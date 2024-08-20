import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      userId: string;
    }
  }
}

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies["auth_token"];
  try {
    if (!token) {
      return res.status(401).json("no token found");
    }

    const decoded = jwt.verify(token, process.env.JWT as string);
    if (!decoded) {
      return res.status(400).json("invalid token");
    }

    req.userId = (decoded as JwtPayload).userId;
    next();
  } catch (error) {}
};
