// Exercise 3 : Repeat The Question
// Instructions
// Prompt the user for a number.
//     Hint : Check the data type you receive from the prompt(ie.Use the typeof method)

// While the number is smaller than 10 continue asking the user for a new number.
//     Tip : Which while loop is more relevant for this situation?

// Solution 1. Using isNaN
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function getUserInput() {
    rl.question("Enter a number: ", function (userInput) {
        const parsedInput = Number(userInput);
        if (isNaN(parsedInput)) {
            console.log("Invalid input. Please enter a valid number.");
            getUserInput(); // Ask again for input
        } else if (parsedInput < 10) {
            console.log("Number must be 10 or greater.");
            getUserInput(); // Ask again for input
        } else {
            // Valid integer entered
            console.log("You entered:", parsedInput);
            rl.close();
        }
    });
}4

getUserInput(); // Start the process
