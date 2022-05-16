const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 2000;

app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  console.log("Recive - Post");
  console.log(req.body);
  res.status(200).end();
});

app.get("/", (req, res) => {
  console.log("Recive - Get");
  console.log(req.body);
  res.status(200).end();
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
