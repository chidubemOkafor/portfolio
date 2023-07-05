const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

const documents = {
  username: "dubem",
  password: 12345678,
};

app.use(express.json());

app.get("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === documents.username && password === documents.password) {
    res.status(200).json({ message: "Login succesdful" });
  } else {
    res.status(401).json({ message: "Login failed" });
  }
});

app.post("/signup", (req, res) => {
  const { username, password } = req.body;

  if (documents.username == username && documents.password == password) {
  }
});

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}...`);
});
