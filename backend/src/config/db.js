import mongoose from "mongoose";
import dotenv from "dotenv";


const connectdb = async () => {
    try {
    await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log("MongoDB connected successfully.")
    } catch (error) {
        console.error("Error Connecting to MONGODB!", err)
    }
}

export default connectdb;