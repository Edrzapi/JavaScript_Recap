
// let example
let x = 10;
console.log("Initial x value:", x); // 10
x = 20; // Reassigning
console.log("Reassigned x value:", x); // 20

// var example
var y = 30;
console.log("Initial y value:", y); // 30
y = 40; // Reassigning
console.log("Reassigned y value:", y); // 40

// const example
const z = 50;
console.log("Initial z value:", z); // 50
// z = 60; // Uncommenting this will cause an error because const cannot be reassigned
// console.log("Reassigned z value:", z);

// Using let inside a block (block-scoping)
if (true) {
  let blockVar = "I'm inside a block!";
  console.log(blockVar); // "I'm inside a block!"
}
// console.log(blockVar); // Uncommenting this will cause an error because blockVar is not accessible outside the block

// Using var inside a block (function-scoping)
if (true) {
  var functionVar = "I'm inside a block, but var makes me function-scoped!";
  console.log(functionVar); // "I'm inside a block, but var makes me function-scoped!"
}
console.log(functionVar); // "I'm inside a block, but var makes me function-scoped!"


// String
let name = "John";
console.log("Name:", name); // "John"

// Number
let age = 30;
console.log("Age:", age); // 30

// Boolean
let isAdult = true;
console.log("Is adult:", isAdult); // true

// Undefined
let something;
console.log("Something:", something); // undefined

// Null
let object = null;
console.log("Object:", object); // null

// Symbol
let uniqueSymbol = Symbol('id'); // represents a unique and immutable value
console.log("Unique Symbol:", uniqueSymbol); // Symbol(id)

// Object (non-primitive)
let person = {
  firstName: "Jane",
  lastName: "Doe",
  age: 28
};
console.log("Person Object:", person); // { firstName: "Jane", lastName: "Doe", age: 28 }

// Array (non-primitive)
let fruits = ["apple", "banana", "cherry"];
console.log("Fruits Array:", fruits); // ["apple", "banana", "cherry"]

// Function (non-primitive)
function greet() {
  console.log("Hello, world!");
}
greet(); // "Hello, world!"



