import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  return res.status(200).send("This is a home page");
});

app.listen(port, () => console.log("Server listening on port: " + port));
