// ---------------------------------------------------
// MODEL SETUP - User
// ---------------------------------------------------

// 1) Importing External Libraries
const mongoose = require("mongoose");

// 2) Creating Schema for Model (blueprint)
const UserSchema = new mongoose.Schema({
  name: String,
  age: Number
}, {
  timestamps: true
});

// 3) Creating Model using Schema
const UserModel = mongoose.model("User", UserSchema);

// 4) Exporting Model
module.exports = UserModel;
