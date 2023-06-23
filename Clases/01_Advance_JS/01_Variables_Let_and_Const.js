//------------------------------------------------------------------------------
// LET AND CONST VARIABLES
//------------------------------------------------------------------------------

// 0) VAR VS LET VS CONST

// |          | Scope           | Hoisting       | Re-Declaration | Mutable  |
// |----------|-----------------|----------------|----------------|----------|
// | var      | Function/Global | Hoisted        | Allowed        | Yes      |
// | let      | Block           | Not hoisted    | Not allowed    | Yes      |
// | const    | Block           | Not hoisted    | Not allowed    | No       |

// Scope: 'var' has function or global scope, 'let' and 'const' have block scope
//        (a block -> {}).
// Hoisting: 'var' variables are hoisted (moved to the top of their scope), while
//           'let' and 'const' variables are not hoisted.
// Re-Declaration: 'var' allows re-declaration within the same scope, 'let' and
//                 'const' do not.
// Mutable: 'var' and 'let' variables can be reassigned with a new value, whereas
//          'const' variables are read-only and cannot be reassigned.
//           NOTE: for objects and arrays assigned to const, their properties
//                 can be modified, but the assignment itself cannot be changed.

// I) LET -> for a variable you will re-assign
console.log("----------------------");

let counter = 1;
console.log(counter); // Output: 1

counter = counter + 1;
console.log(counter); // Output: 2

// II) CONST -> for a variable you won't re-assign
console.log("----------------------");

const firstName = "John";
console.log(firstName); // Output: John
// firstName = "Jane"; // TypeError: Assignment to constant variable.

// WARNING
// "const" keyword -> variable cannot be reassigned.
// Disctinction:
//   Primitive Data Types -> value directly stored in variable (cannot be changed)
//   Non-Primitive Data Types -> value stored in variable is a reference to the value -> object itself
//                               The reference is the one that remains contant, but propoerties of object
//                               can be changed.

console.log("----------------------");
const arr_1 = [1, 2, 3];
arr_1.push(4);
console.log(arr_1); // Output: [1, 2, 3, 4]

console.log("----------------------");
const arr_2 = arr_1
arr_2.push(5);
console.log(arr_1); // Output: [1, 2, 3, 4, 5]
console.log(arr_2); // Output: [1, 2, 3, 4, 5]

console.log("----------------------");

const arr_3 = Object.assign([], arr_1);
// arr_3 = [...arr_1];
arr_2.push(6);
console.log(arr_1); // Output: [1, 2, 3, 4, 5, 6]
console.log(arr_3)


console.log("----------------------");
const John = { name: "John", age: 42 };
console.log(John);
John.name="Paul";
console.log(John);
