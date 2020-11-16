const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(cors());

app.get("/messages", (req, res) => {
  const messages = ["Hello", "Hey", "hi"];

  res.send(messages);
});

app.listen(port, () => console.log("app is connected"));
