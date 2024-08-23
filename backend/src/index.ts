import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRouter from "./routes/user.route";
import hotelRouter from "./routes/myHotel.route";
import cookieParser = require("cookie-parser");
import path = require("path");
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

mongoose
  .connect(process.env.MONGO as string)
  .then(() => {
    console.log("database connected successfully: ", process.env.MONGO);
  })
  .catch((err) => {
    console.log("error in database " + err);
  });
const app = express();
app.use(cookieParser());
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.static(path.join(__dirname, "../../frontend/dist")));
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRouter);
app.use("/api/v1/hotel", hotelRouter);

app.listen(5000, () => {
  console.log("server started");
});
