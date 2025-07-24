import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_, res) => res.send("Server running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
