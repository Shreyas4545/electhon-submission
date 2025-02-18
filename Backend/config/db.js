import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/Electhon";

export const connectDB = mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DB Connected Successfully...."))
  .catch((err) => {
    console.log("DB Connection Failed!");
    console.log(err);
    process.exit(1);
  });

export default connectDB;
