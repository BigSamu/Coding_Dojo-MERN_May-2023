//------------------------------------------------------------------------------
// ASYNC/AWAIT SYNTAX
//------------------------------------------------------------------------------

// async and await is another way to handle asynchronous programming that allows
// you to write your code in a synchronous manner, making it more readable.
// Await can only be used inside an async function.

// Async functions automatically return a Promise if a return statement is provided.
// If no value is returned, it will return a Promise with an undefined value
// (but still you can do some logic inside the function).

// -----------------------------------------------------------------------------
// Example 1 - with no return statement
// -----------------------------------------------------------------------------

const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    console.log("----------------------");
    console.log("first .then");
    console.log("----------------------");
    const data = await response.json();
    console.log("----------------------");
    console.log("second .then");
    console.log(data);
    console.log("----------------------");
  } catch (error) {
    console.log("----------------------");
    console.log("inside .catch", error);
    console.log("----------------------");
  } finally {
    console.log("----------------------");
    console.log(".finally", "This happens whether the .catch happens or not.");
    console.log("----------------------");
  }
};

fetchData();

// -----------------------------------------------------------------------------
// Example 1.a) - brief version
// -----------------------------------------------------------------------------

// const fetchData = async () => {
//   try{
//     const results = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     const data = await results.json();
//     console.log(data);
//   } catch(error){
//     console.log(error);
//   } finally {
//     console.log(".finally", "This happens whether the .catch happens or not.");
//   }
// }

// fetchData();

// -----------------------------------------------------------------------------
// Example 1.b) - brief version with no try/catch block (just catch and if statement)
// -----------------------------------------------------------------------------

// const fetchData = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .catch((error) => {
//       console.log("An error occurred:", error);
//     });

//   if (response) {
//     const data = await response.json();
//     console.log(data);
//   }
// }

// fetchData();


// -----------------------------------------------------------------------------
// Example 2 - with return statement
// -----------------------------------------------------------------------------

// // Defining an async function that handles an API call and returns a Promise
// const getTodos = async () => {
//   try{
//     const results = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     const data = await results.json();
//     return data; // This is the same as: return Promise.resolve(data);
//   } catch(error){
//     console.log(error);
//   }
// }

// // Defining an async function that handles the Promise returned by getTodos()
// const printGetTodos = async () => {
//   try {
//     const todos = await getTodos(); // This is the same as: const todos = await Promise.resolve(data);
//     console.log(todos);
//   } catch(error) {
//     console.log(error);
//   }
// }

// printGetTodos();
