// Import required libraries
const mysql = require("mysql");

// Create MySQL connection pool
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "students2",
});

// Export the pool to be used in other files
module.exports = pool;
