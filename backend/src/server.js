const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get("/messages", (req, res) => {
  const messages = ["Hello", "Hey", "hi"];

  res.send(messages);
});

app.listen(port, () => console.log("app is connected"));
