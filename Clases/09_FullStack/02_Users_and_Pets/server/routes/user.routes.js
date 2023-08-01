// ---------------------------------------------------
// ROUTES SETUP - User
// ---------------------------------------------------

// 1) Importing Controller Methods and Express Third-party Library
const {
  getAllUsers,
  getOneUserById,
  findOneUserByEmail,
  createNewUser,
  updateOneUserById,
  deleteAllUsers,
  deleteOneUserById,
} = require("../controllers/user.controller");

const express = require("express");

// 2) Create Router Instance
const UserRouter = express.Router();

// 3) Link Routes with Controller Methods
UserRouter.get("/", getAllUsers);
UserRouter.get("/by-email", findOneUserByEmail);
UserRouter.get("/:id", getOneUserById);
UserRouter.post("/", createNewUser);
UserRouter.put("/:id", updateOneUserById);
UserRouter.delete("/", deleteAllUsers);
UserRouter.delete("/:id", deleteOneUserById);

// 4) Exporting Router
module.exports = UserRouter;
