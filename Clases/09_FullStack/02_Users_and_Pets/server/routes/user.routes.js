// ---------------------------------------------------
// ROUTES SETUP - User
// ---------------------------------------------------

// 1) Importing Controller Methods and Express Third-party Library
const {
  findAllUsers,
  findOneUserById,
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
UserRouter.get("/", findAllUsers);
UserRouter.get("/by-email", findOneUserByEmail);
UserRouter.get("/:id", findOneUserById);
UserRouter.post("/", createNewUser);
UserRouter.put("/:id", updateOneUserById);
UserRouter.delete("/", deleteAllUsers);
UserRouter.delete("/:id", deleteOneUserById);

// 4) Exporting Router
module.exports = UserRouter;
