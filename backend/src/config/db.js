import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// this is the file that is used to connect to the database

const connectdb = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log("MongoDB connected successfully.");
  } catch (error) {
    console.error("Error Connecting to MONGODB!", err);
  }
};

export default connectdb;
