import express from "express";
const app = express();
const port = 3000;

app.get("/", (_, res) => res.send("Server running"));
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
