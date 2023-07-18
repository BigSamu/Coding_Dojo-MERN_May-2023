// ---------------------------------------------------
// SERVER INITIALIZATION AND CONFIGURATION SETUP
// ---------------------------------------------------

// Imports of 3rd-party Libraries
const express = require("express");
const { faker } = require('@faker-js/faker');

// Intiliazing Express instance ('app') and define auxiliar variables
const app = express();
const port = 8000;

// Enabling settings for being able to read JSON and parse data in body of POST requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ---------------------------------------------------
// CLASS DEFINITIONS
// ---------------------------------------------------

// User Class
class User {
  constructor() {
    this.firstName = faker.person.firstName();
    this.lastName = faker.person.lastName();
    this.phoneNumber = faker.phone.number();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}

// Company Class
class Company {
  constructor() {
    this.name = faker.company.name();
    this.address = {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      country: faker.location.country(),
    };
  }
}

// ---------------------------------------------------
// FUNCTION DEFINITIONS
// ---------------------------------------------------

// // User Function
// const createUser = () => {
//   const newUser = {
//     firstName: faker.person.firstName(),
//     lastName: faker.person.lastName(),
//     phoneNumber: faker.phone.number(),
//     email: faker.internet.email(),
//     password: faker.internet.password(),
//   };
//   return newUser;
// };

// // Company Function
// const createCompany = () => {
//   const newCompany = {
//     name: faker.company.name(),
//     address: {
//       street: faker.location.streetAddress(),
//       city: faker.location.city(),
//       state: faker.location.state(),
//       zipCode: faker.location.zipCode(),
//       country: faker.location.country(),
//     },
//   };
//   return newCompany;
// };

// ---------------------------------------------------
// ROUTES SETUP
// ---------------------------------------------------

// Route for creating a new User
app.post("/api/users/new", (request, response) => {
  let newUserCls = new User();
  // let newUserFunc = createUser();
  response.json({ user: newUserCls });
});

// Route for creating a new Company
app.post("/api/companies/new", (request, response) => {
  let newCompanyCls = new Company();
  // let newCompanyFunc = createCompany();
  response.json({ company: newCompanyCls });
});

// Route for creating a new Company
app.post("/api/user/company", (request, response) => {
  let newUserCls = new User();
  let newCompanyCls = new Company();
  // let newUserFunc = createUser();
  // let newCompanyFunc = createCompany();
  response.json({ user: newUserCls, company: newCompanyCls });
});

// ---------------------------------------------------
// SERVER STARTUP
// ---------------------------------------------------

// Setting up the server to listen on port 8000
app.listen(port, () => console.log(`Listening on port: ${port}`));
