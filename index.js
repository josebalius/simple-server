const express = require("express");
const app = express();
const port = 80;

app.get("/", (req, res) => {
  console.log(`${new Date()} ${req.method} ${req.path}`);
  res.send("Hello World! - Jose");
});

app.get("/hello", (req, res) => {
  res.send("Jose Hello World")
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
