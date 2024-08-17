import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

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
app.use(express.urlencoded({ extended: true }));

app.listen(300, () => {
  console.log("server started");
});
