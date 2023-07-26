// ---------------------------------------------------
// CONFIG SETUP - Database
// ---------------------------------------------------

// 1) Importing External Libraries (Moongose)
const mongoose = require("mongoose");
const db_name = "db_test";

// 2) Setting connection to Mongo DB using 'mongoose' instance
mongoose
    .connect(`mongodb://usuario_cd:P4ssw0rd@127.0.0.1:27017/${db_name}`, {
        useNewUrlParser: true, // Avoids deprecation warnings -> enables new MongoDB connection string parser
        useUnifiedTopology: true, // Avoids connection errors -> enables new unified topology engine for MongoDB Node.js driver
    })
    .then(() => console.log(`Successfully connected to ${db_name} database`))
    .catch((err) => console.log(`Error connecting to ${db_name} database`, err));
