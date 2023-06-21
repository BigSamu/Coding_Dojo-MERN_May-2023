//----------------------------------------------------------------------------
// callback functions will run when you want them to and are used anytime
//    some work must complete before the next function can run or in response
//    to an event firing / happening
// most common examples:
//    after an event happens, we will run some code - onClick, onBlur, etc.
//    asynchronouse functions
// asynchronous functions are very common in web development
//    when contacting an API and waiting on data to return
//----------------------------------------------------------------------------

// any functions can be used as callback functions
function displayResult(result) {
  console.log(result);
}

// an arrow function assigned to a variable will work the same
//    this is the syntax we will use in React applications
const verboseDisplayResult = (result) => {
  console.log("The result that you asked for was: " + result);
}

// add takes in a 3rd parameter which we expect to be a function
function add(num1, num2, callbackFunction) {
  let sum = num1 + num2;
  callbackFunction(sum);
}

function square(num1, callbackFunction) {
  let square = num1 * num1;
  callbackFunction(square);
}

// NOTICE:
//    When you pass a function as an argument DO NOT use parenthesis
//    if you use parenthesis, you are invoking the function
//    we need it to be run AFTER the work has completed

