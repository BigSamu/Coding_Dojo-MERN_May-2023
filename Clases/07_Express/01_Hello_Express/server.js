// ---------------------------------------------------
// SERVER INITIALIZATION AND CONFIGURATION SETUP
// ---------------------------------------------------

// 1) Import Node Packages
const express = require("express"); // CJS -> CommonJS Modules
// import express from "express"; // ESM -> ECMAScript

// 2) Intiliazing Express instance ('app') and define auxiliar variables
const app = express();
const port = 8000;

// ---------------------------------------------------
// ROUTES SETUP
// ---------------------------------------------------

// 3) Defining a simple GET route and return "Hello World" as a response
//        req -> request object
//        res -> response object
app.get("/api", (req, res) => {
  console.log(`Doing request to API server to route '${req.url}' with HTTP method '${req.method}'`);
  res.json({ message: "Hello World" });
});

// ---------------------------------------------------
// SERVER STARTUP
// ---------------------------------------------------

// 4) Setting up the server to listen on port 8000
app.listen( port, () => console.log(`Listening on port: ${port}`) );
