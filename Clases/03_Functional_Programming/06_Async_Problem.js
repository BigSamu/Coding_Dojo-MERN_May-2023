//------------------------------------------------------------------------------
// ASYNC PROBLEM
//------------------------------------------------------------------------------

// Problem -> How I going to start Painting if I receive the brush before the
// paint? Same if I receive the paint before the tarp? I need to wait!!!

const orderSupplies = (item, callback) => {
  // -----------------------
  // API simulation
  //  ----------------------
  let warehouse; //undefined
  const deliveryTime = Math.random() * 3000; // random time between 0 and 3000
  // simulate the time to get the item
  // Simulate response from API
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

    callback(warehouse[item]);
  }, deliveryTime);
};

const receivedItem = (item) => {
  // Item passed is an object literal
  console.log(`Received ${item.product}, time to ${item.directions()}`);
};

orderSupplies("paint", receivedItem);
orderSupplies("brush", receivedItem);
orderSupplies("tarp", receivedItem);

console.log("---------------------------");
