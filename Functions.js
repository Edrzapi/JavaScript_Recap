// Variables
let x, y, z;
x = 5;
y = 10;
z = 15;

// Normal function (requires 'function' keyword and 'return')
function normalFunc(i, j) {
  return i + j;
}

// Arrow function (implicit return for single expression)
arrowFunc = (i, j) => i + j;

// Arrow function without implicit return (needs curly braces)
arrowFuncNonImplicit = (i, j) => { return i + j; };

let oldResult = normalFunc(1, 2);  // 3
let result = arrowFunc(1, 2);      // 3
let nonRes = arrowFuncNonImplicit(1, 2); // 3

console.log(oldResult, result, nonRes);

// "This" example: Arrow function inherits "this"
function TimerArrow() {
    this.seconds = 0;
    setInterval(() => {
        this.seconds++;  // 'this' refers to the TimerArrow object
        console.log(this.seconds);
    }, 1000);
}
const timerArrow = new TimerArrow();

// "This" example: Normal function does not inherit "this"
function TimerNormal() {
    this.seconds = 0;
    setInterval(function() {
        this.seconds++;  // 'this' refers to the global object (or undefined in strict mode)
        console.log(this.seconds);
    }, 1000);
}
const timerNormal = new TimerNormal();

// Arguments example
const arrowFuncWithRest = (...args) => args.reduce((sum, num) => sum + num, 0);  // No 'arguments' object
const normalFuncWithArguments = function() { return Array.from(arguments).reduce((sum, num) => sum + num, 0); };  // 'arguments' object

console.log(arrowFuncWithRest(1, 2, 3));  // 6
console.log(normalFuncWithArguments(1, 2, 3));  // 6
