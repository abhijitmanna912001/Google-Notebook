import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db";
import uploadRoute from "./routes/upload";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/upload", uploadRoute);
app.get("/", (_, res) => res.send("Server running"));

// ✅ First connect to MongoDB, then start server
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () =>
    console.log(`🚀 Server listening at http://localhost:${PORT}`)
  );
});
