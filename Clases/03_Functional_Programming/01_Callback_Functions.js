//------------------------------------------------------------------------------
// CALLBACK FUNCTIONS I
//------------------------------------------------------------------------------

// A callback function in JavaScript is a function that is passed as an argument
// to another function and is intended to be invoked or called later during the
// execution of that outer function. The purpose of a callback function is to
// provide a way to handle asynchronous operations, such as responding to an
// event, fetching data from a server, or executing code after a time delay.

// I) Example 1 -> Custom function with callback function as parameter
// 1.1) Callback function
const displayResult = (result) => {
  console.log("The result that you asked for was: " + result);
};

const displayResultUpperCase = (result) => {
  console.log("THE RESULT THAT YOU ASKED FOR WAS: " + result);
};

// 1.2) Functions that will use the callback function
const add = (num1, num2, callbackFn) => {
  let result = num1 + num2;
  callbackFn(result);
}
const square = (num, callbackFn) => {
  let result = num * num;
  callbackFn(result);
}

// 1.3) Calling the function add
add(2, 3, displayResult); // Output: The result that you asked for was: 5
square(5, displayResult); // Output: The result that you asked for was: 25

add(2,3, displayResultUpperCase); // Output: THE RESULT THAT YOU ASKED FOR WAS: 5
square(5, displayResultUpperCase); // Output: THE RESULT THAT YOU ASKED FOR WAS: 25

// We can also do this
add(2, 3, (result) => {
  console.log("The result that you asked for was: " + result);
});

console.log("----------------------");

// II) Example 2 -> Using forEach loop
const fruits = ["apple", "banana", "orange", "mango"];


fruits.forEach((fruit) => {
  console.log(fruit);
});

// Same as above:
const displayFruits = (fruit) => {
  console.log(fruit);
};
fruits.forEach(displayFruits);

console.log("----------------------");

// III) Example 3 -> Using setTimeout function

setTimeout(() => {
  console.log("Hello World");
}, 1000);

// Same as above:
const sayHello = () => console.log("Hello World");
setTimeout(sayHello, 1000);
