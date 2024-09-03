// Exercise 3 : Analyzing
// Instructions
// Analyze these pieces of code before executing them. What will be the outputs ?
// ------1------
const fruits = ['apple', 'orange'];
const vegetables = ['carrot', 'potato'];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result); // Output: ["bread", "carrot", "potato", "chicken", "apple", "orange"]

// ------2------
const country = 'USA';
console.log([...country]); // Output: ["U", "S", "A"]

// ------Bonus------
let newArray = [...[, ,]]; // When array with empty slots using [ , , ]created it is interpreted as an array with two empty slots. The ...spread operator expands the elements into a new array and treats them as undefined values.
console.log(newArray); // Output: [undefined, undefined]
