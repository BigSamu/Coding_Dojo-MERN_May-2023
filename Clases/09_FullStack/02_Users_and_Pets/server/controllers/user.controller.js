// ---------------------------------------------------
// CONTROLLER SETUP - User
// ---------------------------------------------------

// 1) Importing External Libraries
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types; // Destructuring assignment to get ObjectId

// 2) Importing Model
const UserModel = require("../models/user.model");

// 3) Exporting Controller functions
module.exports = {
  // 2.1) READ METHODS
  findAllUsers: (req, res) => {
    UserModel.find({})
      .then((allUsers) => res.status(200).json(allUsers))
      .catch((err) => res.status(500).json({ message: "Something went wrong", error: err }));
  },
  findOneUserById: (req, res) => {
    if (!ObjectId.isValid(req.params.id))
      return res
        .status(400)
        .json({ message: "UUID doesn't match the specified format" });
    UserModel.findOne({ _id: req.params.id })
      .then((oneSingleUser) => {
        if (oneSingleUser) {
          res.status(200).json(oneSingleUser);
        } else {
          res.status(404).json({ message: "User not found" });
        }
      })
      .catch((err) => res.status(500).json({ message: "Something went wrong", error: err }));
  },
  findOneUserByEmail: (req, res) => {
    UserModel.findOne({ email: req.query.email })
      .then((oneSingleUser) => {
        if (oneSingleUser) {
          res.status(200).json(oneSingleUser);
        } else {
          res.status(404).json({ message: "User not found" });
        }
      })
      .catch((err) => res.status(500).json({ message: "Something went wrong", error: err }));
  },
  // 2.2) CREATE METHODS
  createNewUser: (req, res) => {
    UserModel.create(req.body)
      .then((newlyCreatedUser) => res.status(201).json(newlyCreatedUser))
      .catch((err) => {
        if (err.name === "ValidationError") {
          return res
            .status(400)
            .json({ message: "Validation Errors", errors: err });
        }
        res.status(500).json({ message: "Something went wrong", errors: err });
      });
  },
  // 2.3) UPDATE METHODS
  updateOneUserById: (req, res) => {
    if (!ObjectId.isValid(req.params.id))
      return res
        .status(400)
        .json({ message: "UUID doesn't match the specified format" });

    const updateOptions = {
      new: true, // Return the updated document
      runValidators: true, // Enforce validation during update
    };

    UserModel.findOneAndUpdate({ _id: req.params.id }, req.body, updateOptions)
      .then((updatedUser) => {
        if (updatedUser) {
          res.status(200).json(updatedUser);
        } else {
          res.status(404).json({ message: "User not found" });
        }
      })
      .catch((err) => {
        if (err.name === "ValidationError") {
          return res
            .status(400)
            .json({ message: "Validation Errors", errors: err });
        }
        res.status(500).json({ message: "Something went wrong", errors: err });
      });
  },
  // 2.4) DELETE METHODS
  deleteAllUsers: (req, res) => {
    UserModel.deleteMany({})
      .then((result) => res.status(200).json({ result: result }))
      .catch((err) => res.status(500).json({ message: "Something went wrong", error: err }));
  },
  deleteOneUserById: (req, res) => {
    if (!ObjectId.isValid(req.params.id))
      return res
        .status(400)
        .json({ message: "UUID doesn't match the specified format" });

    UserModel.deleteOne({ _id: req.params.id })
      .then((result) => {
        if (result.deletedCount === 0) {
          res.status(404).json({ message: "User not found" });
        } else {
          res.status(200).json({ result: result });
        }
      })
      .catch((err) => res.status(500).json({ message: "Something went wrong", error: err }));
  },
};
