require("dotenv").config();

const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("gamushara");
});

app.get("/char", (req, res) => {
  res.send("<h2>Welcome to Chai Pe</h2>");
});

app.get("/login", (req, res) => {
  res.send("<h3>Please Login</h3>");
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`);
});
