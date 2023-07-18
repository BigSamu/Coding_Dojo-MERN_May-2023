// ---------------------------------------------------
// ROUTES SETUP - User
// ---------------------------------------------------

// Importing the controller functions
const UserController = require('../controllers/user.controller');

module.exports = (app) => {
  app.get('/api/users', UserController.getAllUsers);
  app.get('/api/users/:id', UserController.getUserById);
  app.post('/api/users', UserController.createUser);
  app.put('/api/users/:id', UserController.updateUser);
  app.delete('/api/users/:id', UserController.deleteUser);
}
