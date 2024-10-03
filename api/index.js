import express from "express";
import connectDB from "./src/db/index.js";
const app = express();
import "dotenv/config";
import usersRoute from "./routes/user.route.js";

connectDB()
  .then(
    app.listen(process.env.PORT||4000 , () => {
      console.log(`app listing at port ${process.env.PORT}`);
    })
  )
  .catch((err) => {
    console.log(err);
  });


  app.use("/api/user",usersRoute);
  //here the final url will be localhost:3000/api/user/test
