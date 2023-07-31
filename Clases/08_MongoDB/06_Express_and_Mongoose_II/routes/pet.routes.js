// ---------------------------------------------------
// ROUTES SETUP - Pet
// ---------------------------------------------------

// 1) Importing Controller
const {
  findAllPets,
  findOnePetById,
  createNewPet,
  updateOnePetById,
  deleteAllPets,
  deleteOnePetById,
} = require("../controllers/pet.controller");
express = require("express");

// 2) Create Router Instance
const PetRouter = express.Router();

// 3) Link Routes with Controller Methods
PetRouter.get("/", findAllPets);
PetRouter.get("/:id/", findOnePetById);
PetRouter.post("/", createNewPet);
PetRouter.put("/:id/", updateOnePetById);
PetRouter.delete("/", deleteAllPets);
PetRouter.delete("/:id/", deleteOnePetById);

// 4) Exporting Router
module.exports = PetRouter;
