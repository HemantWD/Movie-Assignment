const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "favourite",
});

db.connect((err) => {
  if (err) {
    console.log("Error in Connecting to the database: ", err);
    return;
  }
  console.log("Connected to MySql Database");
});

module.exports = db;
