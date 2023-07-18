// ---------------------------------------------------
// SERVER INITIALIZATION AND CONFIGURATION SETUP
// ---------------------------------------------------

// Imports of 3rd-party Libraries
const express = require("express");

// Intiliazing Express instance ('app') and define auxiliar variables
const app = express();
const port = 8000;

// Enabling settings for being able to read JSON and parse data in body of POST requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ---------------------------------------------------
// HARDCODED DATA
// ---------------------------------------------------

// Defining an array of hardcoded users
const users = [
  { id: 1, firstName: "Reimu", lastName: "Hakurei" },
  { id: 2, firstName: "Marisa", lastName: "Kirisame" },
  { id: 3, firstName: "Sanae", lastName: "Kochiya" },
  { id: 4, firstName: "Sakuya", lastName: "Izayoi" },
  { id: 5, firstName: "Momiji", lastName: "Inubashiri" },
];

// ---------------------------------------------------
// ROUTES SETUP
// ---------------------------------------------------

// Get all users (GET)
app.get("/api/users", (req, res) => {
  res.json(users);
});

// Get a single user by id (GET)
app.get("/api/users/:id", (req, res) => {
  // Getting id from path parameters using req.params
  const { id } = req.params;
  res.json(users.find((user) => user.id === parseInt(id)));
});

// Create a new user (POST)
app.post("/api/users", (req, res) => {
  // Getting the data from the request body using req.body
  const { firstName, lastName } = req.body;
  // Creating a new user object
  const newUser = {
    id: users.length + 1,
    firstName,
    lastName,
  };
  // Adding the new user to the array of users
  users.push(newUser);
  // Returning the new user as a response
  res.json(newUser);
});

// Update an existing user (PUT)
app.put("/api/users/:id", (req, res) => {
  // Getting id from path parameters using req.params
  const { id } = req.params;
  // Getting the data from the request body using req.body
  const { firstName, lastName } = req.body;
  // Finding the user to update
  const userToUpdate = users.find((user) => user.id === parseInt(id));
  // Updating the user
  userToUpdate.firstName = firstName;
  userToUpdate.lastName = lastName;
  // Returning the updated user as a response
  res.json(userToUpdate);
});

// Delete an existing user (DELETE)
app.delete("/api/users/:id", (req, res) => {
  // Getting id from path parameters using req.params
  const { id } = req.params;
  console.log(id);
  // Finding the user to delete
  const userToDelete = users.find((user) => user.id === parseInt(id));
  // Deleting the user
  users.splice(users.indexOf(userToDelete), 1); // Removing 1 element from the array
                                                // starting from the index of the user
                                                // to delete
  // Returning the deleted user as a response
  res.json(userToDelete);
})

// ---------------------------------------------------
// SERVER STARTUP
// ---------------------------------------------------

// Setting up the server to listen on port 8000
app.listen(port, () => console.log(`Listening on port: ${port}`));
