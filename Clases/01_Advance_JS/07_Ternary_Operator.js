//------------------------------------------------------------------------------
// Ternary Operators
//------------------------------------------------------------------------------

const person = {
  firstName: 'Billy',
  lastName: 'Bob',
  email: 'bbob@email.com',
  password: 'passw0rd!',
  username: 'billyb',
};

// Basic if statement
console.log("Using the 'normal' if / else statement");
if(person.password === "passw0rd!") {
  console.log("You need to change your password!");   // true
} else {
  console.log("Thanks for changing your password!");  // false
}

console.log("----------------------");

// Ternary Operator
console.log("Using the ternary operator");
person.password === "passw0rd!"
  ? console.log("You need to change your password!")
  : (person.firstName == "Billy")
      ? console.log("Thanks Billy for changing your password!")
      : console.log("Thanks for changing your password!");

console.log("----------------------");

person.password === "passw0rd!"
  ? console.log("You need to change your password!")
  : ""
