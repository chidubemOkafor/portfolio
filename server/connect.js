const sql = require("mysql2");
require("dotenv").config();
const password = process.env.mysqlPassword;

const connection = sql.createConnection({
  host: "localhost",
  user: "root",
  password: password,
  database: "portfolio",
});

module.exports = { connection };
