const express = require("express");
const port = 600;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Start Code");
});

app.listen(port, () => {
  console.log("start");
});
