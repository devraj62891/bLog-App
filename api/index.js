import express from "express";
import connectDB from "./src/db/index.js";
const app = express();
import "dotenv/config";

connectDB()
  .then(
    app.listen(process.env.PORT, () => {
      console.log(`app listing at port ${process.env.PORT}`);
    })
  )
  .catch((err) => {
    console.log(err);
  });
