// ---------------------------------------------------
// MODEL SETUP - Company
// ---------------------------------------------------

const { faker } = require('@faker-js/faker');

// 1) Defining Model with Class
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

// 2) Exporting Model
module.exports = Company;
