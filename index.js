// Import required libraries
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/studentRoutes");

// Create Express app
const app = express();

// Parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Register routes
app.use("/students", routes);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
