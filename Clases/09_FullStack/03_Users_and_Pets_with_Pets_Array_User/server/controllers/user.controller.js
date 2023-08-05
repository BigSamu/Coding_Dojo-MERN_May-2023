// ---------------------------------------------------
// CONTROLLER SETUP - User
// ---------------------------------------------------

// 1) Importing External Libraries
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types; // Destructuring assignment to get ObjectId

// 2) Importing Model
const UserModel = require("../models/user.model");
const PetModel = require("../models/pet.model");

// 3) Exporting Controller functions
module.exports = {
  // 2.1) READ METHODS
  findAllUsers: (req, res) => {
    UserModel.find({})
      .populate("pets")
      .then((allUsers) => res.status(200).json(allUsers))
      .catch((err) =>
        res.status(500).json({ message: "Something went wrong", errors: err })
      );
  },
  findOneUserById: (req, res) => {
    if (!ObjectId.isValid(req.params.id))
      return res
        .status(400)
        .json({ message: "UUID doesn't match the specified format" });
    UserModel.findOne({ _id: req.params.id })
      .populate("pets")
      .then((oneSingleUser) => {
        if (oneSingleUser) {
          res.status(200).json(oneSingleUser);
        } else {
          res.status(404).json({ message: "User not found" });
        }
      })
      .catch((err) =>
        res.status(500).json({ message: "Something went wrong", errors: err })
      );
  },
  findOneUserByEmail: (req, res) => {
    UserModel.findOne({ email: req.query.email })
      .populate("pets")
      .then((oneSingleUser) => {
        if (oneSingleUser) {
          res.status(200).json(oneSingleUser);
        } else {
          res.status(404).json({ message: "User not found" });
        }
      })
      .catch((err) =>
        res.status(500).json({ message: "Something went wrong", errors: err })
      );
  },
  // 2.2) CREATE METHODS
  createNewUser: (req, res) => {
    UserModel.create(req.body)
      .then((newlyCreatedUser) => res.status(201).json(newlyCreatedUser))
      .catch((err) =>
        res.status(500).json({ message: "Something went wrong", errors: err })
      );
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
      .populate("pets")
      .then((updatedUser) => {
        if (updatedUser) {
          res.status(200).json(updatedUser);
        } else {
          res.status(404).json({ message: "User not found" });
        }
      })
      .catch((err) =>
        res.status(500).json({ message: "Something went wrong", errors: err })
      );
  },
  // 2.4) DELETE METHODS
  deleteAllUsers: (req, res) => {
    UserModel.find({})
      .then((users) => {
        const petIds = users.reduce((ids, user) => [...ids, ...user.pets], []);
        // Above same as:
        // const petIds = [];
        // for (const user of users) {
        //   for (const pet of user.pets) {
        //     petIds.push(pet);
        //   }
        // }

        return PetModel.deleteMany({ _id: { $in: petIds } });
      })
      .then(() => UserModel.deleteMany({}))
      .then(() =>
        res.status(200).json({ message: "All users and their pets deleted" })
      )
      .catch((err) =>
        res.status(500).json({ message: "Something went wrong", errors: err })
      );
  },
  deleteOneUserById: (req, res) => {
    if (!ObjectId.isValid(req.params.id))
      return res
        .status(400)
        .json({ message: "UUID doesn't match the specified format" });
    // Find the user by ID first
    UserModel.findById({ _id: req.params.id })
      .then((user) => {
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }

        // Collect all the pet IDs
        const petIds = user.pets;

        // Delete all the pets
        return PetModel.deleteMany({ _id: { $in: petIds } }).then(() => {
          // Now delete the user
          return UserModel.deleteOne({ _id: req.params.id }).then((result) => {
            if (result.deletedCount === 0) {
              return res.status(404).json({ message: "User not found" });
            } else {
              return res.status(200).json({
                message: "User and associated pets deleted successfully",
              });
            }
          });
        });
      })
      .catch((err) =>
        res.status(500).json({ message: "Something went wrong", errors: err })
      );
  },
};
