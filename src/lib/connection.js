import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL;
const MongoConnection = async () => {
  try {
    const state = mongoose.connection.readyState;

    if (state === 1) {
      console.log(" Already connected to MongoDB");
      return;
    }
    if (state === 2) {
      console.log("MongoDB is connecting...");
      return;
    }

    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB");

    mongoose.connection.on("disconnected", () => {
      console.log(" MongoDB disconnected");
    });
  } catch (error) {
    console.error(" MongoDB connection error:", error);
    throw error;
  }
};
export default MongoConnection;
