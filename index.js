const express = require("express");
const bodyParser = require("body-parser");
const { handler, sendToOperator } = require("./controllers");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.json());

app.get("*", async (req, res) => {
  await handler(req);
  res.send("GET request handled");
  console.log("get ger");
});

app.post("/to_operator", async (req, res) => {
  await sendToOperator(req);
  res.send("POST request handled");
});

app.post("*", async (req, res) => {
  await handler(req);
  res.send("POST request handled");
  console.log(req.body, "bodys");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
