const express = require("express");
const { connection } = require("./connect");
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

connection.connect((err) => {
  if (err) {
    console.error("reverted with:" + err);
  } else {
    console.log("connected to sql database");
  }
});

app.use(cors());
app.use(express.json());

app.post("/api/authorization", (req, res) => {
  const { password } = req.body;
  if (password === process.env.password) {
    res.status(200).json({ message: "authorized access" });
  } else {
    res.status(200).json({ message: "invalid password" });
  }
});

app.post("/api/addProjects", (req, res) => {
  // Check if the user is authorized before adding the project
  const { image, link, title, descriptions } = req.body;
  const sql =
    "INSERT INTO projects(image,link,title,descriptions) VALUES(?,?,?,?)";
  const values = [image, link, title, descriptions];

  // Verify authorization before proceeding
  const { authorization } = req.headers;
  if (authorization !== process.env.password) {
    return res.status(401).json({ message: "Unauthorized enter a password" });
  }

  connection.query(sql, values, (error, response) => {
    if (error) {
      res.status(401).json({ error: "internal server error" });
    }
    res.status(200).json({ message: "project added" });
  });
});

app.get("/api/getProjects", (req, res) => {
  sql = "SELECT * FROM projects WHERE id = 1";
  connection.query(sql, (error, response) => {
    if (error) {
      res.status(401).json({ error: "Internal server error" });
    }
    res.status(200).json(response);
  });
});

app.listen(8000, () => {
  console.log(`server listening on ${PORT}...`);
});
