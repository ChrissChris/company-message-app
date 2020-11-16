const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

var messages = ["Hello", "Hey", "hi"];

app.get("/messages", (req, res) => {
  let msg = req.body;
  console.log(msg);
  messages.push(msg);
  res.json(msg);
});

app.listen(port, () => console.log("app is connected"));
