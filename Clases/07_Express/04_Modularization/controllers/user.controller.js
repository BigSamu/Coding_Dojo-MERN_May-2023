// ---------------------------------------------------
// CONTROLLER SETUP - User
// ---------------------------------------------------

const UserModel = require("../models/user.model")

// Defining an array of hardcoded users
const users = [
  new UserModel(1, "Reimu", "Hakurei"),
  new UserModel(2, "Marisa", "Kirisame"),
  new UserModel(3, "Sanae", "Kochiya"),
  new UserModel(4, "Sakuya", "Izayoi"),
  new UserModel(5, "Momiji", "Inubashiri"),
];

// Defining the controller object

module.exports = {
  // Get all users
  getAllUsers: (req, res) => {
    res.json(users);
  },

  // Get a single user by id
  getUserById: (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => user.id === parseInt(id));
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  },

  // Create a new user
  createUser: (req, res) => {
    const { firstName, lastName } = req.body;
    const id = users.length + 1;
    const newUser = new UserModel(id, firstName, lastName);
    users.push(newUser);
    res.json(newUser);
  },

  // Update an existing user
  updateUser: (req, res) => {
    const { id } = req.params;
    const { firstName, lastName } = req.body;
    const user = users.find((user) => user.id === parseInt(id));
    if (user) {
      user.firstName = firstName;
      user.lastName = lastName;
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  },

  // Delete an existing user
  deleteUser: (req, res) => {
    const { id } = req.params;
    const index = users.findIndex((user) => user.id === parseInt(id));
    if (index !== -1) {
      const deletedUser = users.splice(index, 1)[0];
      res.json(deletedUser);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  },
};

