// Hoisting is a mechanism in JavaScript where variable and function declarations
// are moved to the top of their containing scope during the compilation phase.
// This allows us to use functions before their actual declarations and access
// variables before they are declared in the code.

// I) PROGRAMMER VERSION
magic();

var foo = "bar";

function magic(){
    foo = "hello world";
    console.log(foo);
    var foo;
}

console.log(foo);

console.log("----------------------");

// II) HOISTING (Internally JS)
function magic() {
  var foo; // Declaration of the local variable foo is hoisted to the top of the function
  foo = "hello world";
  console.log(foo);
}

var foo; // Declaration of the global variable foo is hoisted to the top of the scope

magic(); // Output: "hello world"

foo = "bar";

console.log(foo); // Output: "bar"

// --------------------------------------------------------------------------------------------

// I) PROGRAMMER VERSION
function print(){
  console.log("My value is " + x)
}

var x = 5;
print();


// II) HOISTING (Internally JS)
var x // -> undefined;
function print(){
  console.log("My value is " + x)
}

x = 5;
print();
