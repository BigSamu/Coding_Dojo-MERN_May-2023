//------------------------------------------------------------------------------
// SORT
//------------------------------------------------------------------------------

// I) Ordering Numbers
const numbers = [10, 2, 100, 3, 200, 400, 20, 1, 1, 5, 6, 7, 8, 9];

// 1.1) Sort numbers in ascending order
numbers.sort((num_1, num_2) => num_1 - num_2);
console.log(numbers); // Output: [ 1, 2, 3, 5, 6, 7, 8, 9, 10, 20, 100, 200, 400 ]
// 1.2) Sort numbers in descending order
numbers.sort((num_1, num_2) => num_2 - num_1);
console.log(numbers); // Output: [ 400, 200, 100, 20, 10, 9, 8, 7, 6, 5, 3, 2, 1 ]

console.log("----------------------");

// II) Ordering Strings
const names = [
  "John",
  "Jane",
  "Jack",
  "Mary",
  "Mark",
  "Mike",
  "Ana",
  "Zoe",
  "Adam",
  "Eve",
  "Jack",
];

// 2.1) Sort names in ascending order
names.sort((name_1, name_2) => name_1.localeCompare(name_2));
console.log(names);
// 2.2) Sort names in descending order
names.sort((name_1, name_2) => name_2.localeCompare(name_1));
console.log(names);

console.log("----------------------");

// III) Ordering Objects

const products = [
  { name: "Laptop", price: 1500, category: "Electronics" },
  { name: "TV", price: 1200, category: "Electronics" },
  { name: "Shirt", price: 30, category: "Clothing" },
  { name: "Shoes", price: 80, category: "Clothing" },
  { name: "Book", price: 20, category: "Books" },
  { name: "Smartphone", price: 800, category: "Electronics" },
  { name: "Headphones", price: 200, category: "Electronics" },
];

// Sorting products by category and then by price in ascending order
products.sort((product_1,product_2) => {
  if(product_1.category === product_2.category) {
    return product_1.price - product_2.price;
  }
  return product_1.category.localeCompare(product_2.category);
});

// Same as above:
// products.sort((product_1,product_2) => {
//   if(product_1.category.localeCompare(product_2.category)<0){
//     return -1;
//   }
//   else if(product_1.category.localeCompare(product_2.category)>0){
//     return 1;
//   }
//   else if (product_1.price < product_2.price){
//     return -1
//   }
//   else if (product_1.price > product_2.price){
//     return 1
//   }
//   else{
//     return 0;
//   }
// });

console.log(products);


// Sorting products by category and then by price in descending order with
// ternary operator

products.sort((product_1, product_2) =>
  product_1.category === product_2.category
    ? product_2.price - product_1.price
    : product_2.category.localeCompare(product_1.category)
);
console.log(products);
