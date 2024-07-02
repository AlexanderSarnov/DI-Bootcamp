// Exercise 3 : Repeat The Question
// Instructions
// Prompt the user for a number.
//     Hint : Check the data type you receive from the prompt(ie.Use the typeof method)

// While the number is smaller than 10 continue asking the user for a new number.
//     Tip : Which while loop is more relevant for this situation?

// Solution 1. Using isNaN
let userInput;

do {
    userInput = prompt("Enter a number:");
} while (isNaN(Number(userInput)) || Number(userInput) < 10);

// Valid integer entered
let integerValue = Number(userInput);
console.log("You entered:", integerValue);
