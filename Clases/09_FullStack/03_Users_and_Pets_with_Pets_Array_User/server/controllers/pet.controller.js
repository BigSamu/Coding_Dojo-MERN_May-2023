// ---------------------------------------------------
// CONTROLLER SETUP - Pet
// ---------------------------------------------------

// 1) Importing External Libraries
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types; // Destructuring assignment to get ObjectId

// 2) Importing Model
const PetModel = require("../models/pet.model");
const UserModel = require("../models/user.model");

// 3) Exporting Controller functions
module.exports = {
  // 2.1) READ METHODS
  findAllPets: (req, res) => {
    PetModel.find({})
      .populate("owner")
      .then((allPets) => res.status(200).json(allPets))
      .catch((err) => {
        res.status(500).json({ message: "Something went wrong", errors: err });
      });
  },
  findOnePetById: (req, res) => {
    if (!ObjectId.isValid(req.params.id))
      return res
        .status(400)
        .json({ message: "UUID doesn't match the specified format" });
    PetModel.findOne({ _id: req.params.id })
      .populate("owner")
      .then((oneSinglePet) => {
        if (oneSinglePet) {
          res.status(200).json(oneSinglePet);
        } else {
          res.status(404).json({ message: "Pet not found" });
        }
      })
      .catch((err) => {
        res.status(500).json({ message: "Something went wrong", errors: err });
      });
  },
  // 2.2) CREATE METHODS
  createNewPet: (req, res) => {
    // Validate ownerId
    if (!ObjectId.isValid(req.body.owner))
      return res
        .status(400)
        .json({ message: "UUID Owner doesn't match the specified format" });

    UserModel.findOne({ _id: req.body.owner })
      .then((user) => {
        if (!user) {
          return res.status(404).send({ message: "Owner not found" });
        }

        // Create the pet using the create() method
        return PetModel.create(req.body).then((pet) => {
          // Update the user's pets array without using .save
          return UserModel.findOneAndUpdate(
            { _id: req.body.owner },
            { $push: { pets: pet._id } },
            { new: true }
          ).then(() => {
            // Respond with the newly created pet
            return res.status(200).send(pet);
          });
        });
      })
      .catch((err) => {
        // Handle any errors that occurred during the operation
        if (err.name === "ValidationError") {
          return res
            .status(400)
            .json({ message: "Validation Errors", errors: err });
        }
        res.status(500).json({ message: "Something went wrong", errors: err });
      });
  },
  // 2.3) UPDATE METHODS
  updateOnePetById: (req, res) => {
    if (!ObjectId.isValid(req.params.id))
      return res
        .status(400)
        .json({ message: "UUID doesn't match the specified format" });

    const updateOptions = {
      new: true, // Return the updated document
      runValidators: true, // Enforce validation during update
    };

    PetModel.findById(req.params.id)
      .then((existingPet) => {
        if (!existingPet) {
          return res.status(404).json({ message: "Pet not found" });
        }

        const oldOwnerId = existingPet.owner;
        const newOwnerId = req.body.owner;

        if (!ObjectId.isValid(newOwnerId)) {
          return res
            .status(400)
            .json({ message: "Invalid UUID for the new owner" });
        }

        if (oldOwnerId.toString() !== newOwnerId) {
          // Owner has changed, update pets arrays for both old and new owners
          return Promise.all([
            UserModel.findOneAndUpdate(
              { _id: oldOwnerId },
              { $pull: { pets: existingPet._id } }
            ),
            UserModel.findOneAndUpdate(
              { _id: newOwnerId },
              { $push: { pets: existingPet._id } }
            ),
          ])
            .then(() => {
              // Now update the pet with the new data
              return PetModel.findOneAndUpdate(
                { _id: req.params.id },
                req.body,
                updateOptions
              )
                .populate("owner")
                .then((updatedPet) => {
                  res.status(200).json(updatedPet);
                });
            })
            .catch((err) => {
              if (err.name === "ValidationError") {
                return res
                  .status(400)
                  .json({ message: "Validation Errors", errors: err });
              }
              res
                .status(500)
                .json({ message: "Something went wrong", errors: err });
            });
        } else {
          // Owner remains the same, update the pet only
          PetModel.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            updateOptions
          )
            .populate("owner")
            .then((updatedPet) => {
              res.status(200).json(updatedPet);
            });
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
  deleteAllPets: (req, res) => {
    PetModel.deleteMany({})
      .then(() => {
        // Update all users to remove references to any pets in their pets array
        return UserModel.updateMany(
          {}, // Match all documents
          { $set: { pets: [] } } // Set the pets array to an empty array
        );
      })
      .then(() => res.status(200).json({ message: "All pets deleted" }))
      .catch((err) =>
        res.status(500).json({ message: "Something went wrong", errors: err })
      );
  },
  deleteOnePetById: (req, res) => {
    if (!ObjectId.isValid(req.params.id))
      return res
        .status(400)
        .json({ message: "UUID doesn't match the specified format" });
    // Find the pet by ID
    PetModel.findOne({ _id: req.params.id })
      .then((pet) => {
        if (!pet) {
          return res.status(404).send({ message: "Pet not found" });
        }
        const ownerId = pet.owner;
        // Remove the pet
        return PetModel.deleteOne({ _id: req.params.id }).then(() => {
          // Update the user's pets array to remove the pet's ID
          return UserModel.findByIdAndUpdate(
            ownerId,
            { $pull: { pets: req.params.id } },
            { new: true }
          ).then(() => {
            return res
              .status(200)
              .send({ message: "Pet deleted successfully" });
          });
        });
      })
      .catch((err) => {
        res.status(500).json({ message: "Something went wrong", errors: err });
      });
  },
};
