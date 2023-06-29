//------------------------------------------------------------------------------
// HOW THEN WORKS
//------------------------------------------------------------------------------

const someAsyncTask = () => {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous task
    setTimeout(() => {
      const data = "Some result"; // Simulated result from API
      resolve(data); // Resolve the promise with the result
    }, 2000);
  });
};

// -----------------------------------------------------------------------------
// Example 1 - With console.log statements inside each .then()
// -----------------------------------------------------------------------------

someAsyncTask() // retuns a Promise
  // 1) Handling Promise
  .then((result) => { // 'result' is the output from Promise
    console.log(`First .then() - Resived result: ${result}`);
    return result.toUpperCase(); // returning the output to next .then()
  })
  // 2) Handling the output from previous .then()
  .then((modifiedResult) => { // 'modifiedResult' is the output from the previous .then()
    console.log(`Second .then() - Modified result: ${modifiedResult}`);
    return modifiedResult.length; // returning the output to next .then()
  })
  // 3) Handling the output from previous .then()
  .then((resultLength) => { // 'resultLength' is the output from the previous .then()
    console.log(`Third .then() - Result length: ${resultLength}`);
  })
  // 4) Handling any errors
  .catch((error) => { // Catching any errors
    console.error("An error ocurred:", error);
  });
// -----------------------------------------------------------------------------
// Example 1 - Simplified syntax with console.log for just last .then()
// -----------------------------------------------------------------------------

// someAsyncTask() // retuns a Promise
//   .then((result) => result.toUpperCase()) // return result.toUpperCase() to next .then()
//   .then((modifiedResult) => modifiedResult.length) // return modifiedResult.length to next .then()
//   .then((resultLength) => console.log(`Result length: ${resultLength}`)) // console.log the output from previous .then()
//   .catch((error) => console.error("An error ocurred:", error)); // Catching any errors
