// ---------------------------------------------------
// SERVER INITIALIZATION AND CONFIGURATION SETUP
// ---------------------------------------------------

// 1) Imports of 3rd-party Libraries
const express = require("express");
const cors = require("cors");

// 2) Intiliazing Express instance ('app') and define auxiliar variables
const app = express();
const port = 8000;

// 3) Configuring cors in Express instace ('app')
app.use(cors());

// 4) Importing API routes passing the Express instance 'app'
const PersonRoutes = require("./routes/person.routes");
PersonRoutes(app);

// 5) Running instance of Express server in selected port
app.listen(port, () => console.log(`Listening on port: ${port}`));
