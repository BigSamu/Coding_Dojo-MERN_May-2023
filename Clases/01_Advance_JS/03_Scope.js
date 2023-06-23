//------------------------------------------------------------------------------
// SCOPE
//------------------------------------------------------------------------------

// I) Function/Global Scope -> var

function example() {
  var y; // hoisting
  var x = 10; // Variable x is declared with var within the function scope

  if (true) {
    y = 20; // Variable y is declared with var within the block scope (but still accessible outside the block)
    console.log(x); // Output: 10
    console.log(y); // Output: 20
  }

  console.log(x); // Output: 10
  console.log(y); // Output: 20 (y is accessible here due to the function scope)
}

example();
// console.log(x); // ReferenceError: x is not defined (x is not accessible outside the function scope)
// console.log(y); // ReferenceError: y is not defined (y is not accessible outside the block scope)

console.log("----------------------");

// II) Block Scope -> let and const
function example() {
  let x = 10; // Variable x is declared with let within the function scope

  if (true) {
    let y = 20; // Variable y is declared with let within the block scope
    console.log(x); // Output: 10
    console.log(y); // Output: 20
  }

  console.log(x); // Output: 10
  console.log(y); // ReferenceError: y is not defined (y is not accessible outside the block scope)
}

example();
// console.log(x); // ReferenceError: x is not defined (x is not accessible outside the function scope)
// console.log(y); // ReferenceError: y is not defined (y is not accessible outside the block scope)
