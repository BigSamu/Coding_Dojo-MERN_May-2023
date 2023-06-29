//------------------------------------------------------------------------------
// PROMISES AND ASYNC COMMUNICATION
//------------------------------------------------------------------------------

// In JavaScript, a Promise is an object that represents the eventual completion
// or failure of an asynchronous operation and its resulting value. Promises are
// used to handle asynchronous communication in a more structured and readable way.

// A Promise has 3 states:
// a) Pending: Initial state, neither fulfilled nor rejected.
// b) Fulfilled: Meaning that the operation was completed successfully.
// c) Rejected: Meaning that the operation failed.

// Promises has the following syntaxis

const promise = new Promise((resolve, reject) => {
  //  Perform an asynchronous operation
  //  If the operation is successful, call resolve(value)
  //  If the operation fails, call reject(error)
});

// Check what a promise contains
console.log(promise); // Promise { <pending> }


// -----------------------------------------------------------------------------
// Example 1 - Simulating response from API resolving with no rejection
// -----------------------------------------------------------------------------

const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = "Hello World!";
    resolve(data);
  }, 1500);
});

fetchData
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// -----------------------------------------------------------------------------
// Example 2 - Simulating response from API resolving with rejection
// -----------------------------------------------------------------------------

// const fetchData2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const data = {
//       id: 1,
//       name: "John Doe",
//       age: 30,
//     }; /* Simulated API response */
//     const status = "ok"; /* Simulated API OK status */
//     // const status = "error"; /* Simulated API ERROR status */

//     if (status === "ok") {
//       resolve(data);
//     } else {
//       reject("Error: Something went wrong");
//     }
//   }, 2000);
// });

// fetchData2
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });
