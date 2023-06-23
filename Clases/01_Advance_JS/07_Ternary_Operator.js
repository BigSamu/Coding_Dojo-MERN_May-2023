//------------------------------------------------------------------------------
// TERNARY OPERATORS
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


// Ternary Operator -> Basic
console.log("Using the ternary operator");
person.password === "passw0rd!"
  ? console.log("You need to change your password!")
  : console.log("Thanks for changing your password!");


console.log("----------------------");

// Ternary Operator -> nested conditionals
console.log("Using the ternary operator -> nested conditionals");
person.password === "passw0rd!"
  ? console.log("You need to change your password!")
  : (person.firstName == "Billy")
      ? console.log("Thanks Billy for changing your password!")
      : console.log("Thanks for changing your password!");

console.log("----------------------");

// Ternary Operator -> if there is no else condition
console.log("Using the ternary operator -> if there is no else condition");
person.password === "passw0rd!"
  ? console.log("You need to change your password!")
  : ""
