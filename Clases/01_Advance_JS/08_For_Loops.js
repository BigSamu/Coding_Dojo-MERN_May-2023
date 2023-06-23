//------------------------------------------------------------------------------
// FOR LOOPS
//------------------------------------------------------------------------------

const fruits = ["apple", "banana", "orange"];
const person = {
  name: "John",
  age: 30,
  occupation: "Developer",
};

console.log("----------------------");

// I) Traditional For Loop
console.log("Using traditional for loop:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log("----------------------");

// II) For...of Loop
console.log("Using for...of loop:"); //-> [1,2,3] -> num=1, num=2, num=3
for (let item of fruits) {
  console.log(item);
}

console.log("----------------------");

console.log("Using for...of loop and getting idx:");
for (let [idx, item] of fruits.entries()) {
  console.log(idx, item);
}

console.log("----------------------");

// III) For...in Loop
console.log("Using for...in loop:");
for (let key in person) {
  // console.log(key + ": " + person[key]);
  console.log(`${key}: ${person[key]}`);
}

// EXPLANATION:
// for...of loop is used to iterate over the values of an iterable object (such
//  as Arrays, Strings, Map, Set, etc), providing a simpler syntax for accessing elements
//  directly.

// for...in loop is used to iterate over the properties/keys of an object,
// including inherited properties, making it suitable for working with object properties.

console.log("----------------------");

// III) ForEach Loop
console.log("Using forEach loop:");

fruits.forEach((item, idx) => {
  console.log(item);
});

console.log("----------------------");

// Same as above
const printItem = (item) => {
  console.log(item);
}
fruits.forEach(printItem);

console.log("----------------------");

// Passing index in parameter for Callback function
fruits.forEach((item, idx) => {
  console.log(`${idx}: ${item}`);
});

console.log("----------------------");
// Passing index in parameter for Callback function
fruits.forEach((item, idx, array) => {
  console.log(`${idx}: ${item} - ${array}`);
});
