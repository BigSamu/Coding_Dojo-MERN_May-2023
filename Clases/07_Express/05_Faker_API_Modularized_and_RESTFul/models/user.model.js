// ---------------------------------------------------
// MODEL SETUP - User
// ---------------------------------------------------

const { faker } = require('@faker-js/faker');

// 1) Defining Model with Class
class User {
  constructor() {
    this.firstName = faker.person.firstName();
    this.lastName = faker.person.lastName();
    this.phoneNumber = faker.phone.number();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}

// 2) Exporting Model
module.exports = User;
