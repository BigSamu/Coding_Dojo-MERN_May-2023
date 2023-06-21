
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Example using filter: Filter even numbers
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

// Example using map: Double each number
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// Example using reduce: Calculate the sum of numbers
const sum = numbers.reduce((accumulator, num) => accumulator + num, 0);
console.log(sum); // Output: 55


// EXPLANATION:

// filter: The filter method is used to create a new array (evenNumbers)
//         containing only the even numbers from the numbers array.
//         The num % 2 === 0 condition is used to filter out the even numbers.

// map: The map method is used to create a NEW ARRAY!! (doubledNumbers) where
//      each element is the corresponding element of the numbers array
//      multiplied by 2. It doubles each number in the array.
// NOTE: The map method does not modify the original array in contrast with the
//       forEach method that it does.

// reduce: The reduce method is used to calculate the sum of all the numbers in
//         the numbers array. The accumulator keeps track of the accumulated
//         sum, and num represents each number in the array. The initial value
//         of the accumulator is set to 0.
