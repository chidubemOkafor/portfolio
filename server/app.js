const express = require("express");
const { connection } = require("./connect");
const cors = require("cors");

const jwt = require("jsonwebtoken");
require("dotenv").config();

const PORT = process.env.PORT || 8000;
const app = express();

// Use async/await to connect to the database
(async () => {
  try {
    await connection.connect();
    console.log("connected to sql database");
  } catch (err) {
    console.error("reverted with:", err);
  }
})();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

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
  const { authorization } = req.headers;
  if (authorization !== process.env.password) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const image = req.body.image;
  const imageBuffer = Buffer.from(image).toString("base64");

  const { link, title, descriptions } = req.body;
  const sql =
    "INSERT INTO projets(image, link, title, descriptions) VALUES (?, ?, ?, ?)";
  const values = [imageBuffer, link, title, descriptions];

  // Verify authorization before proceeding

  connection.query(sql, values, (error, response) => {
    if (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.status(200).json({ message: "project added" });
    }
  });
});

app.get("/api/getProjects", (req, res) => {
  const sql = "SELECT * FROM projets";
  connection.query(sql, (error, response) => {
    if (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.status(200).json(response);
    }
  });
});

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}...`);
});
