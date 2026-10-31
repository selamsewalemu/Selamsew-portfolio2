import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  let uri = process.env.MONGO_URI || process.env.MONGODB_URI;

  if (!uri) {
    console.warn("⚠️  Neither MONGO_URI nor MONGODB_URI specified in environment. Running in standalone memory mode.");
    return;
  }

  // Ensure default database name if missing
  if (uri.startsWith("mongodb+srv://") && !uri.includes(".mongodb.net/") && !uri.includes(".mongodb.net/?")) {
    uri = uri.replace(".mongodb.net", ".mongodb.net/portfolio");
  }

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB connection failed: ${error.message}`);
    console.warn("Continuing server execution without persistent MongoDB connection.");
  }
};

export default connectDB;
