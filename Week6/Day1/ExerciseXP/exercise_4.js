// Exercise 4 : Find The Sum
// Instructions
// Create a one line function (ie.an arrow function) that receives two numbers as parameters and returns the sum.

// Solution 1
const sumFunction = (a, b) => typeof a === 'number' && typeof b === 'number' ? a + b : "cannot compare non-numerical values";

console.log(sumFunction(4, 6));
console.log(sumFunction("hello", "world"));

// Solution 2
const sumFunction2 = (a, b) => isNaN(a) || isNaN(b) ? "cannot compare non-numerical values" : a + b;

console.log(sumFunction2(4, 6));
console.log(sumFunction2("hello", "world"));