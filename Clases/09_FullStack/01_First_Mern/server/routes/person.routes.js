// ---------------------------------------------------
// CONTROLLER SETUP - Person
// ---------------------------------------------------

// 1) Importing Model
const { index } = require("../controllers/person.controller");

// 2) Exporting Routes
module.exports = (app) => {
  app.get("/api", index);
};
