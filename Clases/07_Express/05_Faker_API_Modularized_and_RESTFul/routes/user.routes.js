// ---------------------------------------------------
// ROUTES SETUP - User
// ---------------------------------------------------

// 1) Importing Controller
const UserController = require('../controllers/user.controller');

// 2) Exporting Routes
module.exports = (app) => {
  app.post('/api/users', UserController.createUser);
}
