// ---------------------------------------------------
// CONTROLLER SETUP - Pet
// ---------------------------------------------------

// 1) Importing External Libraries
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types; // Destructuring assignment to get ObjectId

// 2) Importing Model
const PetModel = require("../models/pet.model");

// 3) Exporting Controller functions
module.exports = {
  // 2.1) READ METHODS
  findAllPets: async (req, res) => {
    try {
      const allPets = await PetModel.find({}).populate("owner");
      res.status(200).json(allPets);
    } catch (err) {
      res.status(500).json({ message: "Something went wrong", error: err });
    }
  },
  findOnePetById: async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
      return res
        .status(400)
        .json({ message: "UUID doesn't match the specified format" });
    try {
      const oneSinglePet = await PetModel.findOne({ _id: req.params.id }).populate("owner");
      if (oneSinglePet) {
        res.status(200).json(oneSinglePet);
      } else {
        res.status(404).json({ message: "Pet not found" });
      }
    } catch (err) {
      res.status(500).json({ message: "Something went wrong", error: err });
    }
  },
  // 2.2) CREATE METHODS
  createNewPet: async (req, res) => {
    try {
      const newPet = await PetModel.create(req.body);
      const newPetPopulated = await PetModel.findOne({ _id: newPet._id }).populate("owner");
      res.status(201).json(newPetPopulated);
    } catch (err) {
      if (err.name === "ValidationError") {
        return res
          .status(400)
          .json({ message: "Validation Errors", errors: err });
      }
      res.status(500).json({ message: "Something went wrong", errors: err });
    }
  },
  // 2.3) UPDATE METHODS
  updateOnePetById: async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
      return res
        .status(400)
        .json({ message: "UUID doesn't match the specified format" });
    const updateOptions = {
      new: true, // Return the updated document
      runValidators: true, // Enforce validation during update
    };

    try {
      const updatedPet = await PetModel.findOneAndUpdate({ _id: req.params.id }, req.body, updateOptions).populate("owner");
      if (updatedPet) {
        res.status(200).json(updatedPet);
      } else {
        res.status(404).json({ message: "Pet not found" });
      }
    } catch (err) {
      if (err.name === "ValidationError") {
        return res
          .status(400)
          .json({ message: "Validation Errors", errors: err });
      }
      res.status(500).json({ message: "Something went wrong", errors: err });
    }
  },
  // 2.4) DELETE METHODS
  deleteAllPets: async (req, res) => {
    try {
      const result = await PetModel.deleteMany({});
      res.status(200).json({ result: result });
    } catch (err) {
      res.status(500).json({ message: "Something went wrong", error: err });
    }
  },
  deleteOnePetById: async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
      return res
        .status(400)
        .json({ message: "UUID doesn't match the specified format" });
    try {
      const result = await PetModel.deleteOne({ _id: req.params.id });
      if (result.deletedCount === 0) {
        res.status(404).json({ message: "Pet not found" });
      } else {
        res.status(200).json({ result: result });
      }
    } catch (err) {
      res.status(500).json({ message: "Something went wrong", error: err });
    }
  },
};
