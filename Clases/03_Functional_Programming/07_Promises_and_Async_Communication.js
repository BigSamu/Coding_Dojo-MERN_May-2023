//------------------------------------------------------------------------------
// PROMISES AND ASYN COMMUNICATION
//------------------------------------------------------------------------------

// In JavaScript, a Promise is an object that represents the eventual completion
// or failure of an asynchronous operation and its resulting value. Promises are
// used to handle asynchronous operations in a more structured and readable way.

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

