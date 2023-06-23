//------------------------------------------------------------------------------
// MAP, FILTER AND REDUCE
//------------------------------------------------------------------------------

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const persons = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Jack", age: 20 },
];


// I) Filter -> using filter method for getting even numbers
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

const overTwentyOne = persons.filter((person) => person.age > 21);
console.log(overTwentyOne); // Output: [ { id: 1, name: 'John', age: 25 }, { id: 2, name: 'Jane', age: 30 } ]

const oddPersons = persons.filter((person, idx) =>  idx % 2 !== 0 );
console.log(oddPersons); // Output: [ { id: 2, name: 'Jane', age: 30 } ]

console.log("----------------------")

// II) Map -> using map method for getting the square of each number in a NEW array
const squareNumbers = numbers.map((number) =>  number * number);
console.log(squareNumbers); // Output: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

const personsWithId = persons.map((person, idx) => {
  person["id"] = idx + 1;
  return person;
})
console.log(personsWithId); // Output: [ { name: 'John', age: 25, id: 1 }, { name: 'Jane', age: 30, id: 2 }, { name: 'Jack', age: 20, id: 3 } ]

console.log("----------------------")

// III) Reduce -> using reduce method for getting the sum of all numbers
const sumNumbers = numbers.reduce((acc, curr) => acc + curr ,0);
console.log(sumNumbers); // Output: 55

const sumAges = persons.reduce((acc, curr) => acc + curr.age ,0);
console.log(sumAges); // Output: 75
