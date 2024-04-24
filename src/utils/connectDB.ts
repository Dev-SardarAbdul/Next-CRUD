import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (process.env.MONGO_URI) {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("Database connected");
    }
  } catch (error) {
    console.log("Error connecting database:", error);
  }
};

export default connectDB;
