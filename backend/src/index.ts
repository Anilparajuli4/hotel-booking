import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRouter from "./routes/user.route";

mongoose
  .connect(process.env.MONGO as string)
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((err) => {
    console.log("error in database " + err);
  });
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRouter);

app.listen(5000, () => {
  console.log("server started");
});
