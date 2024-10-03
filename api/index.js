import express from "express";
import connectDB from "./src/db/index.js";
const app = express();
import "dotenv/config";
import usersRoute from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js"


app.use(express.json());
//this is veery important it allow json as  an input in the backend

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
  app.use("/api/auth",authRoutes);
  //here the final url will be localhost:3000/api/user/test

  app.use((err, req,res, next)=>{
    const statusCode=err.statusCode || 500;
    const message = err.message || 'Internal server error';
    res.status(statusCode).json({
      sucess:false,
      statusCode,
      message
    })
  })
