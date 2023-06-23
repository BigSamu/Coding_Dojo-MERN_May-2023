//------------------------------------------------------------------------------
// Arrow Functions
//------------------------------------------------------------------------------

// Arrow functions, introduced in ECMAScript 6 (ES6), provide a concise syntax
// for writing anonymous functions in JavaScript. They offer a more compact and
// expressive way to define functions compared to traditional function expressions.

function display(name) {
  console.log(`My name is ${name}`);
}
display("Billy");

const displayInVariable = function (name) {
  console.log(`My name is ${name}`);
}
displayInVariable("Billy");

const displayInVariableArrow = (name) => console.log(`My name is ${name}`);
// Below same as above:
// const displayInVariableArrow = (name) => {
//   console.log(`Hello ${name}`);
// }

displayInVariableArrow("Billy");

console.log("----------------------");

function hello(name){
  let output = `Hello ${name}`;
  return output;
}
console.log(hello("Billy"));

const helloInVariable = function (name){
  let output = `Hello ${name}`;
  return output;
}
console.log(helloInVariable("Billy"));

const helloInVariableArrow = (name) => `Hello ${name}`;
console.log(helloInVariableArrow("Billy"));

console.log("----------------------");

const add = (a, b) => a + b;
console.log(add(5, 10));
const square = (x) => x * x;
console.log(square(5));

// Above the same as:
const add2 = function (a, b) {
  return a + b;
}
console.log(add2(5, 10));

const square2 = function (x) {
  return x * x;
}
console.log(square2(5));

console.log("----------------------");

const sayHello = (name) => {
  const greeting = `Hello ${name}`;
  console.log("We have created the following greeting: " + greeting);
  return greeting;
}

// The above is the same as:
function sayHello2(name) {
  const greeting = `Hello ${name}`;
  console.log("We have created the following greeting: " + greeting);
  return greeting;
}

const myGreeting = sayHello("Billy");
console.log(myGreeting);
const myGreeting2 = sayHello2("Billy");
console.log(myGreeting2);

console.log("----------------------");
