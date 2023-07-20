// ---------------------------------------------------
// CONTROLLER SETUP - User
// ---------------------------------------------------

// 1) Importing Model
const UserModel = require("../models/user.model");

// 2) Exporting Controller functions
module.exports = {
  createUser: (req, res) => {
    let newUser = new UserModel();
    res.json({ user: newUser });
  },
}
