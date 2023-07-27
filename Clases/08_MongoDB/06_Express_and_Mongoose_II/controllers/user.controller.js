// ---------------------------------------------------
// CONTROLLER SETUP - User
// ---------------------------------------------------

// 1) Importing Model
const UserModel = require("../models/user.model");

// 2) Exporting Controller functions
module.exports = {
  // 2.1) READ METHODS
  getAllUsers: (req, res) => {
    UserModel.find({}).populate("pets")
      .then((allUsers) => res.status(200).json(allUsers))
      .catch((err) =>
        res.status(500).json({ message: "Something went wrong", error: err })
      );
  },
  getOneUserById: (req, res) => {
    UserModel.findOne({ _id: req.params.id }).populate("pets")
      .then((oneSingleUser) => {
        if (oneSingleUser) {
          res.status(200).json(oneSingleUser);
        } else {
          res.status(404).json({ message: "User not found" });
        }
      })
      .catch((err) =>
        res.status(500).json({ message: "Something went wrong", error: err })
      );
  },
  findOneUserByEmail: (req, res) => {
    UserModel.findOne({ email: req.query.email }).populate("pets")
      .then((oneSingleUser) => {
        if (oneSingleUser) {
          res.status(200).json(oneSingleUser);
        } else {
          res.status(404).json({ message: "User not found" });
        }
      })
      .catch((err) =>
        res.status(500).json({ message: "Something went wrong", error: err })
      );
  },

  // 2.2) CREATE METHODS
  createNewUser: (req, res) => {
    UserModel.create(req.body)
      .then((newUser) => res.status(201).json(newUser))
      .catch((err) =>
        res.status(500).json({ message: "Something went wrong", error: err })
      );
  },
  // 2.3) UPDATE METHODS
  updateExisitingUser: (req, res) => {
    const updateOptions = {
      new: true, // Return the updated document
      runValidators: true, // Enforce validation during update
    };
    UserModel.findOneAndUpdate({ _id: req.params.id }, req.body, updateOptions).populate("pets")
      .then((updatedUser) => {
        if (updatedUser) {
          res.status(200).json(updatedUser);
        } else {
          res.status(404).json({ message: "User not found" });
        }
      })
      .catch((err) =>
        res.status(500).json({ message: "Something went wrong", error: err })
      );
  },

  // 2.4) DELETE METHODS
  deleteAllUsers: (req, res) => {
    UserModel.deleteMany({})
      .then((result) => res.status(200).json(result))
      .catch((err) =>
        res.status(500).json({ message: "Something went wrong", error: err })
      );
  },
  deleteOneUserById: (req, res) => {
    UserModel.deleteOne({ _id: req.params.id })
      .then((result) => {
        if (result.deletedCount > 0) {
          res.status(200).json(result);
        } else {
          res.status(404).json({ message: "User not found" });
        }
      })
      .catch((err) =>
        res.status(500).json({ message: "Something went wrong", error: err })
      );
  },
};
