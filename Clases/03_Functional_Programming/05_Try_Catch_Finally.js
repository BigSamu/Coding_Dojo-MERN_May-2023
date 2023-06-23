//------------------------------------------------------------------------------
// TRY CATCH FINALLY
//------------------------------------------------------------------------------

// Example 1:
const divideNumbers = (a, b) => {
  try {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    } else {
      let result = a/b
      console.log(`The result of the division is: ${result}`);
    }
  } catch (error) {
    console.log(`An error occurred: ${error.message}`);
  } finally {
    console.log('End of Operation');
  }
}

// Example usage:
divideNumbers(10, 2); // Output: The result of the division is: 5
divideNumbers(10, 0); // Output: An error occurred: Division by zero is not allowed.

console.log("--------------------------------")

// Example 2:

// Imaging this API as an exteranl service that we are consuming -> calculating
// the result of an operation
const apiCalculatorService = (num1, num2, op) => {

  if (typeof num1 != 'number' || typeof num2 != 'number') {
    throw new Error("The numbers params must be of type number");
  }
  let result;
  if (op === '+') {
    result = num1 + num2;
  } else if (op === '-') {
    result = num1 - num2;
  } else if (op === '*') {
    result = num1 * num2;
  } else if (op === '/') {
    if (num2 === 0) {
      throw new Error("Division by zero is not allowed.");
    } else {
      result = num1 / num2;
    }
  } else {
    throw new Error("Operation not supported.");
  }
  return result;
}

// Our internal code we need to run the following calculations:
const arr =[
  {num1: 10, num2: 2, op: '+'},
  {num1: 10, num2: 2, op: '-'},
  {num1: 10, num2: 2, op: '*'},
  {num1: 10, num2: 2, op: '/'},
  {num1: 10, num2: 0, op: '/'},
  {num1: 10, num2: 2, op: 'x'},
  {num1: 10, num2: 'str', op: '+'},
]

arr.forEach((obj) => {
  try{
    result = apiCalculatorService(obj.num1,obj.num2,obj.op)
    console.log(`The result of the operation is: ${result}`);
  } catch(error) {
    console.log(`An error occurred: ${error.message}`);
  }

})
