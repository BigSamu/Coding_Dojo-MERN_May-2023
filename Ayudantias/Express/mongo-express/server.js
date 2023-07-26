const express = require("express");

const app = express();

// 3) Enabling settings for being able to read JSON and parse url encoded data in requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 4) Initializing connection to NoSQL database (MongoDB) using Moongose interface
require("./config/mongo");

let peopleRouter = require("./routes/people.routes");
peopleRouter(app);



app.listen(8000, () => {
    console.log("Estamos andando")
})