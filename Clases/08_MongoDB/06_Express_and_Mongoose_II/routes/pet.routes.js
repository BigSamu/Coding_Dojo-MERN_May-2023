// ---------------------------------------------------
// ROUTES SETUP - Pet
// ---------------------------------------------------

// 1) Importing Controller
const {
  findAllPets,
  findOnePetById,
  createNewPet,
  updateExistingPet,
  deleteAllPets,
  deleteAnExistingPet,
} = require("../controllers/pet.controller");
express = require("express");

// 2) Create Router Instance
const PetRouter = express.Router();

// 3) Link Routes with Controller Methods
PetRouter.get("/", findAllPets);
PetRouter.get("/:id/", findOnePetById);
PetRouter.post("/", createNewPet);
PetRouter.put("/:id/", updateExistingPet);
PetRouter.delete("/", deleteAllPets);
PetRouter.delete("/:id/", deleteAnExistingPet);

// 4) Exporting Router
module.exports = PetRouter;
