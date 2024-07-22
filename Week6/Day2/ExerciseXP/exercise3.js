// Exercise 3 : Analyzing
// Instructions
// Analyze these pieces of code before executing them.What will be the outputs ?

// *The spread operator(...) is used to expand the contents of arrays into individual elements within another array.

// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result); // ["bread", "carrot", "potato", "chicken", "apple", "orange"] - because after bread we have array of vegetables and after chicken there is array fruits

// ------2------
const country = "USA";
console.log([...country]); // ["U", "S", "A"] - because string is an array of letters

// ------Bonus------
let newArray = [...[, ,]];
console.log(newArray); // [undefined, undefined] - because values are not defined for elements before commas

