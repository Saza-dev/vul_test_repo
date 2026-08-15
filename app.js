const express = require("express");
const mysql = require("mysql");
const app = express();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const query = "SELECT * FROM users WHERE username = '" + username + "'";

  db.query(query, (err, results) => {
    if (err) return res.status(500).send("Error");
    res.send("Success");
  });
});

app.listen(8080);
