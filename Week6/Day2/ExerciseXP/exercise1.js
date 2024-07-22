// Write a JavaScript program that displays the colors in the following order: “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
// Hint: Use the array methods taught in class.Look at the lesson Array Methods.

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// 1. Display colors with ordinal numbers using map() and template literals
colors.map((color, index) => console.log(`${index + 1}# choice is ${color}.`));

// 2. Check for "Violet" using some()
const hasViolet = colors.some(color => color === "Violet");
console.log(hasViolet ? "Yeah" : "No...");