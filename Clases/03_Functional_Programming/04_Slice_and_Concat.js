//------------------------------------------------------------------------------
// SLICE AND CONCAT
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// SLICE AND CONCAT
//------------------------------------------------------------------------------

// I) Slice
const fruits = ['apple', 'banana', 'orange', 'kiwi', 'mango'];

const slicedFruits = fruits.slice(1, 4);
console.log(slicedFruits);
// Output: ['banana', 'orange', 'kiwi']

const lastTwoFruits = fruits.slice(-2);
console.log(lastTwoFruits);
// Output: ['kiwi', 'mango']

const copyOfFruits = fruits.slice();
console.log(copyOfFruits);
// Output: ['apple', 'banana', 'orange', 'kiwi', 'mango']

// II) Concat
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

const mergedArray = arr1.concat(arr2, arr3);
const mergedArray2 = [...arr1, ...arr2, ...arr3];
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(mergedArray2); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

const combinedArray = arr1.concat(['a', 'b', 'c']);
const combinedArray2 = [...arr1, 'a', 'b', 'c'];
console.log(combinedArray); // Output: [1, 2, 3, 'a', 'b', 'c']
console.log(combinedArray2); // Output: [1, 2, 3, 'a', 'b', 'c']
