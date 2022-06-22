import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import mongooseConnect from "./config/db.js";
import userRoute from "./routes/UserRoutes.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

await mongooseConnect();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "Your frontend Host Address" }));

app.use("/api/user", userRoute);

app.use((error, req, res, next) => {
  console.log(error);
  res.status(400).json({ message: error.message });
});

const port = process.env.PORT || 5000;

app.listen(port, console.log("Server is running... "));
