// ---------------------------------------------------
// SERVER INITIALIZATION AND CONFIGURATION SETUP
// ---------------------------------------------------

// 1) Imports of 3rd-party Libraries
const express = require("express");

// 2) Intiliazing Express instance ('app') and define auxiliar variables
const app = express();
const port = 8000;

// 3) Enabling settings for being able to read JSON and parse url encoded data in requests
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// 4) Initializing connection to NoSQL database (MongoDB) using Moongose interface
require("./config/mongoose.config");

// 5) Importing API routes and incorporating them to 'app' instance
const UserRouter = require("./routes/user.routes");
const PetRouter = require("./routes/pet.routes");
app.use('/api/users', UserRouter);
app.use('/api/pets', PetRouter);

// 6) Running instance of Express server in selected port
app.listen(port, () => console.log(`Listening on port: ${port}`));