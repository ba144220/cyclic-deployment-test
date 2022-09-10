import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  console.log("GET /");
  return res.status(200).send("This is a home page");
});
app.get("/port", (req, res) => {
  console.log("GET /port");
  return res.status(200).send("Server listening on port: " + port);
});

app.post("/echo", (req, res) => {
  console.log("POST /echo");
  const data = req.body;
  console.log(data);
  if (!data) {
    return res.status(300).send("No data!!!");
  }

  return res.status(200).json(data);
});

app.listen(port, () => console.log("Server listening on port: " + port));
