// ---------------------------------------------------
// SERVER INITIALIZATION AND CONFIGURATION SETUP
// ---------------------------------------------------

// 1) Imports of 3rd-party Libraries
const express = require("express");

// 2) Intiliazing Express instance ('app') and define auxiliar variables
const app = express();
const port = 8000;

// 3) Enabling settings for being able to read JSON and parse data in body of POST requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 4) Importing API routes passing the Express instance 'app'
const UserRoutes = require("./routes/user.routes");
UserRoutes(app);

// 5) Running instance of Express server in selected port
app.listen(port, () => console.log(`Listening on port: ${port}`));
