// ---------------------------------------------------
// ROUTES SETUP - User
// ---------------------------------------------------

// 1) Importing Controller
const UserController = require("../controllers/user.controller");

// 2) Exporting Routes
module.exports = (app) => {
  app.get("/api/users", UserController.findAllUsers);
  app.get("/api/users/:id", UserController.findOneUserById);
  app.post("/api/users", UserController.createNewUser);
  app.put("/api/users/:id", UserController.updateExistingUser);
  app.delete("/api/users", UserController.deleteAllUsers);
  app.delete("/api/users/:id", UserController.deleteAnExistingUser);
};
