const mysql = require("mysql2");

// connect to MySQL database
const db = mysql.createConnection(
  {
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "company_db",
    port: "8889",
  },
  console.log(`Connected to the "company_db" database.`)
);

db.connect(function (err) {
  if (err) throw err;
});

module.exports = db;
