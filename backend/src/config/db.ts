import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const {
      MONGO_USER,
      MONGO_PASSWORD,
      MONGO_CLUSTER,
      MONGO_DB_NAME,
      MONGO_APP_NAME,
    } = process.env;

    if (
      !MONGO_USER ||
      !MONGO_PASSWORD ||
      !MONGO_CLUSTER ||
      !MONGO_DB_NAME ||
      !MONGO_APP_NAME
    ) {
      throw new Error("Missing MongoDB environment variables.");
    }

    const uri = `mongodb+srv://${MONGO_USER}:${encodeURIComponent(
      MONGO_PASSWORD
    )}@${MONGO_CLUSTER}/${MONGO_DB_NAME}?retryWrites=true&w=majority&appName=${MONGO_APP_NAME}`;

    const conn = await mongoose.connect(uri);
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
};
