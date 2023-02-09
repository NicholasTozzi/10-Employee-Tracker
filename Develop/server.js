//imports
const express = require("express");
const mysql = require("mysql2");
const { printTable } = require("console-table-printer");
// const { toUnicode } = require("punycode");
//port
const PORT = process.env.PORT || 3001;
const app = express();
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "password",
    database: "personnel_db",
  },
  console.log(`Connected to the personnel_db database.`)
);

//Database Queries
//TODO
db.query("SELECT * FROM students", function (err, results) {
  printTable(results);
});

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
