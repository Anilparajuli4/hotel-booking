import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRouter from "./routes/user.route";
import cookieParser = require("cookie-parser");
import path = require("path");

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

app.listen(5000, () => {
  console.log("server started");
});
