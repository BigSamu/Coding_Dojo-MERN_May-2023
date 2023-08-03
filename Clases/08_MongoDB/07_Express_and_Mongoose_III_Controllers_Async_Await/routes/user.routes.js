// ---------------------------------------------------
// ROUTES SETUP - User
// ---------------------------------------------------

// 1) Importing Controller
const {
  findAllUsers,
  findOneUserByEmail,
  findOneUserById,
  createNewUser,
  updateOneUserById,
  deleteAllUsers,
  deleteOneUserById,
} = require("../controllers/user.controller");
express = require("express");

// 2) Create Router Instance
const UserRouter = express.Router();

// 3) Link Routes with Controller Methods
UserRouter.get("/", findAllUsers);
UserRouter.get("/by-email/", findOneUserByEmail);
UserRouter.get("/:id/", findOneUserById);
UserRouter.post("/", createNewUser);
UserRouter.put("/:id/", updateOneUserById);
UserRouter.delete("/", deleteAllUsers);
UserRouter.delete("/:id/", deleteOneUserById);

// 3) Exporting Router
module.exports = UserRouter;
