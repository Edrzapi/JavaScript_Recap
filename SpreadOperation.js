// Shallow Copy of an Array
const numbers = [1, 2, 3];
const copy = [...numbers]; // Create a shallow copy of the numbers array

console.log('Original array:', numbers); // Output: [1, 2, 3]
console.log('Copied array:', copy);      // Output: [1, 2, 3]

// Shallow Copy of an Object
const person = { name: 'Alice', age: 25 };
const copiedPerson = { ...person }; // Create a shallow copy of the person object

console.log('Original person:', person);  // Output: { name: 'Alice', age: 25 }
console.log('Copied person:', copiedPerson); // Output: { name: 'Alice', age: 25 }

// Merging Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2]; // Combine arr1 and arr2 into a new array

console.log('Merged array:', merged); // Output: [1, 2, 3, 4, 5, 6]

// Merging Objects
const obj1 = { name: 'Alice', age: 25 };
const obj2 = { city: 'New York', occupation: 'Developer' };
const mergedObj = { ...obj1, ...obj2 }; // Combine properties of obj1 and obj2 into a new object

console.log('Merged object:', mergedObj); 
// Output: { name: 'Alice', age: 25, city: 'New York', occupation: 'Developer' }

// Adding Elements to an Array
const newNumbers = [1, ...numbers, 5]; // Adding 1 to the beginning and 5 to the end of the numbers array

console.log('New numbers array:', newNumbers); // Output: [1, 2, 3, 5]

// Splitting a String into an Array
const word = "hello";
const letters = [...word]; // Split the string "hello" into an array of characters

console.log('Letters array:', letters); // Output: ['h', 'e', 'l', 'l', 'o']

// Overriding Properties in Objects
const updatedPerson = { name: 'Bob', city: 'New York' };
const mergedPerson = { ...person, ...updatedPerson };

console.log('Merged person with override:', mergedPerson);
// Output: { name: 'Bob', age: 25, city: 'New York' }
// The 'name' property is overridden by the one from updatedPerson

// Combining Arrays with New Elements
const fruits = ['apple', 'banana', 'cherry'];
const moreFruits = ['kiwi', 'mango'];

// Adding new elements in between arrays
const combinedFruits = ['orange', ...fruits, ...moreFruits, 'grape'];

console.log('Combined fruits:', combinedFruits);
// Output: ['orange', 'apple', 'banana', 'cherry', 'kiwi', 'mango', 'grape']

// Avoiding Mutation with Objects
const modifiedObj = { ...person, b: 3 };

console.log('Original object:', person);  // Output: { name: 'Alice', age: 25 }
console.log('Modified object:', modifiedObj); // Output: { name: 'Alice', age: 25, b: 3 }
// The original object is not mutated.

// Working with Function Arguments
function sum(...args) {
  return args.reduce((total, current) => total + current, 0);
}

const numbersToSum = [1, 2, 3, 4];
console.log('Sum of numbers:', sum(...numbersToSum)); // Output: 10

// Shallow Copy with Nested Objects
const nestedArray = [{ name: 'Alice' }, { name: 'Bob' }];
const copiedArray = [...nestedArray];

// Modifying the original object's property
nestedArray[0].name = 'Charlie';

console.log('Original nested array:', nestedArray); // Output: [{ name: 'Charlie' }, { name: 'Bob' }]
console.log('Copied nested array:', copiedArray); // Output: [{ name: 'Charlie' }, { name: 'Bob' }]
// Notice that the change affects the copied array as well because it's a shallow copy.

// Deep Copy Example using JSON methods
const original = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(original));

original.b.c = 3;

console.log('Deep copy value:', deepCopy.b.c); // Output: 2 (deep copy is unaffected)
console.log('Original value:', original.b.c); // Output: 3 (original is affected)

// Using Spread with Sets
const mySet = new Set([1, 2, 3]);
const setToArray = [...mySet];

console.log('Set to array:', setToArray); // Output: [1, 2, 3]

// Using Spread with Maps
const myMap = new Map([
  ['name', 'Alice'],
  ['age', 25],
]);

const mapToArray = [...myMap];

console.log('Map to array:', mapToArray); 
// Output: [['name', 'Alice'], ['age', 25]]

// Cloning Maps or Sets
const map1 = new Map([['a', 1], ['b', 2]]);
const map2 = new Map([...map1]); // Using the spread operator to clone the map

console.log(map2); 
// Output: Map(2) { 'a' => 1, 'b' => 2 }

const set1 = new Set([1, 2, 3]);
const set2 = new Set([...set1]); // Using spread to clone the set

console.log(set2); 
// Output: Set(3) { 1, 2, 3 }
