const express = require("express");

const app = express();

require("./config/mongo.config");

app.listen(8080, () => {
    console.log("Server started at port 8080")
});
