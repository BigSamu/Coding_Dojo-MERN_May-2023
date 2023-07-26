// ---------------------------------------------------
// MODEL SETUP - User
// ---------------------------------------------------

// 1) Importing External Libraries
const mongoose = require("mongoose");

// 2) Creating Schema for Model (blueprint)

const PersonSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    age: Number,
    male: Boolean,
}, {
    timestamps: true
});

// 3) Creating Model using Schema
const PersonModel = mongoose.model("People", PersonSchema);

// 4) Exporting Model
module.exports = PersonModel;