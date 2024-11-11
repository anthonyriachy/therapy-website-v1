import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectToDB = async ()=>{
    try {
        const connect=await mongoose.connect(process.env.MONGO_URL);
        console.log("connected to database: ")

    } catch (error) {
        console.log("error while connecting to database: "+error);
    }
}