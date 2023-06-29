//------------------------------------------------------------------------------
// SOLVING THE ASYNC PROBLEM - PROMISES
//------------------------------------------------------------------------------

const orderSupplies = (item) => {
  let warehouse; //undefined
  const deliveryTime = Math.random() * 3000;
  const orderPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      warehouse = {
        paint: {
          product: "Neon Green Paint",
          directions: () => "mix it!",
        },
        brush: {
          product: "Horsehair brush",
          directions: () => "start painting!",
        },
        tarp: {
          product: "A large tarp",
          directions: () => "cover the floor!",
        },
      };

      if (item in warehouse) {
        resolve(warehouse[item]);
      } else {
        reject(new Error(`Item '${item}' is out of stock!`));
      }
    }, deliveryTime);
  });
  return orderPromise;
};

const receivedItem = (item) => {
  console.log(`Received ${item.product}, time to ${item.directions()}`);
};
// -----------------------------------------------------------------------------
// I) Solving the Async Problem with chaining thens
// -----------------------------------------------------------------------------

// Here the catch statement is more general. If any error occurs, it will
// catch but without the possibility of a fine grain control for each error

orderSupplies("tarp") // return promise
  .then((result) => receivedItem(result)) // return nothing, just console.log from callback
  .then(() => orderSupplies("paint")) // return promise
  .then((result) => receivedItem(result)) // return nothing, just console.log from callback
  .then(() => orderSupplies("brush")) // return promise
  .then((result) => receivedItem(result)) // return nothing, just console.log from callback
  .then(() => orderSupplies("roller")) // return promise
  .then((result) => receivedItem(result)) // return nothing, just console.log from callback
  .catch((error) => console.log(error.message)); // return nothing, just console.log error message

// NOTE: the above syntax is the same as below

// -----------------------------------------------------------------------------
// I.a) Solving the Async Problem with chaining thens - Extended form arrow functions
// -----------------------------------------------------------------------------

// orderSupplies("tarp") // return promise
//   .then((result) => {
//     receivedItem(result); // return nothing, just console.log from callback
//   })
//   .then(() => {
//     return orderSupplies("paint"); // return promise
//   })
//   .then((result) => {
//     receivedItem(result); // return nothing, just console.log from callback
//   })
//   .then(() => {
//     return orderSupplies("brush"); // return promise from callback
//   })
//   .then((result) => {
//     receivedItem(result); // return nothing, just console.log from callback
//   })
//   .then(() => {
//     return orderSupplies("roller"); // return promise
//   })
//   .then((result) => {
//     receivedItem(result); // return nothing, just console.log from callback
//   })
//   .catch((error) => {
//     console.log(error.message); // return nothing, just console.log error message
//   });

// NOTE: we can reduce the syntax of the above code by removing the result parameter
// for function that do not return a promise. then() is intellingent enough
// to know that the result of the previous promise is the parameter for the
// callback function

// -----------------------------------------------------------------------------
// I.b) Solving the Async Problem with chaining thens simplified
// -----------------------------------------------------------------------------

// orderSupplies("tarp") // return promise
//   .then(receivedItem) // return nothing, just console.log
//   .then(() => orderSupplies("paint")) // return promise
//   .then(receivedItem) // return nothing, just console.log
//   .then(() => orderSupplies("brush")) // return promise
//   .then(receivedItem) // return nothing, just console.log
//   .then(() => orderSupplies("roller")) // return promise
//   .then(receivedItem) // return nothing, just console.log
//   .catch((error) => console.log(error.message));

// -----------------------------------------------------------------------------
// II) Solving the Async Problem with nesting then/cathcs
// NOTE: This approach allows a more controlled way of catching errors executing
// specific actions for specific errors
// -----------------------------------------------------------------------------

// orderSupplies("tarp") // return promise
//   .then((result) => receivedItem(result)) // return nothing, just console.log from callback
//   .then(() => {
//     orderSupplies("paint") // return promise
//       .then((result) => receivedItem(result)) // return nothing, just console.log from callback
//       .then(() => {
//         orderSupplies("brush") // return promise
//           .then((result) => receivedItem(result)) // return nothing, just console.log from callback
//           .then(() => {
//             orderSupplies("roller") // return promise
//               .then((result) => receivedItem(result)) // return nothing, just console.log from callback
//               .catch((error) => { // catch for roller
//                 console.log(error.message);
//               })
//           })
//           .catch((error) => { // catch for brush
//             console.log(error.message);
//           })
//       })
//       .catch((error) => { // catch for paint
//         console.log(error.message);
//       })
//   .catch((error) => { // catch for tarp
//     console.log(error.message);
//   })
// })

// -----------------------------------------------------------------------------
// III) Solving the Async Problem with Promise.all()
// NOTE: This approach allows to execute all promises in parallel and then
// resolve at once. The only issue is that if one promise fails, all the
// promises will fail
// -----------------------------------------------------------------------------

// Promise.all([
//   orderSupplies("tarp"),
//   orderSupplies("paint"),
//   orderSupplies("brush"),
//   orderSupplies("roller")
// ])
//   .then((items) => items.forEach((item) => receivedItem(item)))
//   .catch((error) => console.log(error.message));
