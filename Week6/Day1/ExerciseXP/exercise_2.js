// Exercise 2 : Ternary Operator
// Instructions
// Using the code below:

// function winBattle() {
//     return true;
// }
// Transform the winBattle() function to an arrow function.
const winBattle = () => {
    return true;
}

// Create a variable called experiencePoints.
let experiencePoints
// Assign to this variable, a ternary operator.If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
experiencePoints = winBattle() ? 10 : 1; // **Structure of ternary operator: "condition ? expressionIfTrue : expressionIfFalse"

// Console.log the experiencePoints variable.
console.log(experiencePoints); // Return value 10