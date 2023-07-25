// ---------------------------------------------------
// CONTROLLER SETUP - User
// ---------------------------------------------------

// 1) Importing Model
const UserModel = require("../models/user.model");

// 2) Exporting Controller functions
module.exports = {
  // 2.1) READ METHODS
  findAllUsers: (req, res) => {
    UserModel.find()
      .then((allUsers) => res.json({ users: allUsers }))
      .catch((err) =>
        res.json({ message: "Something went wrong", error: err })
      );
  },
  findOneUserById: (req, res) => {
    UserModel.findOne({ _id: req.params.id })
      .then((oneSingleUser) => res.json({ user: oneSingleUser }))
      .catch((err) =>
        res.json({ message: "Something went wrong", error: err })
      );
  },
  // 2.2) CREATE METHODS
  createNewUser: (req, res) => {
    UserModel.create(req.body)
      .then((newlyCreatedUser) => res.json({ user: newlyCreatedUser }))
      .catch((err) =>
        res.json({ message: "Something went wrong", error: err })
      );
  },
  // 2.3) UPDATE METHODS
  updateExistingUser: (req, res) => {
    UserModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }) // { new: true } -> returns updated document instead of original
      .then((updatedUser) => res.json({ user: updatedUser }))
      .catch((err) =>
        res.json({ message: "Something went wrong", error: err })
      );
  },
  // 2.4) DELETE METHODS
  deleteAllUsers: (req, res) => {
    UserModel.deleteMany({})
      .then((result) => res.json({ result: result }))
      .catch((err) =>
        res.json({ message: "Something went wrong", error: err })
      );
  },
  deleteAnExistingUser: (req, res) => {
    UserModel.deleteOne({ _id: req.params.id })
      .then((result) => res.json({ result: result }))
      .catch((err) =>
        res.json({ message: "Something went wrong", error: err })
      );
  },
};
