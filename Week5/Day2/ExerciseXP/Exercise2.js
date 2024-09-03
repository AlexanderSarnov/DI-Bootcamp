// Exercise 2 : Colors #2
// Instructions
// Using these arrays :

const colors = ['Blue', 'Green', 'Red', 'Orange', 'Violet', 'Indigo', 'Yellow'];
const ordinal = ['th', 'st', 'nd', 'rd'];
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” etc…
// Hint : Use the array methods taught in class and ternary operator.

// Solution Algorithm:
// Understand the problem by analyzing the provided arrays and the requirement.
// We need to iterate over the colors array and for each index + 1, use the proper ordinal number and display it in the message of a following sort: "n-th choice is color".
// Thinking of the message it can be a string of a following format: `${index + 1}${ordinal[f(index + 1) where f(index+1) finds the proper ordinal number] choice is ${color at index}`.
// We will need a loop to iterate over the colors array and apply the required logic.
// Finally, will need to display the message for each color in the colors array.

// Getting the proper ordinal number. General approach:
// colors[0] -> ordinal[1] -> '1st'
// colors[1] -> ordinal[2] -> '2nd'
// colors[2] -> ordinal[3] -> '3rd'
// colors[3] -> ordinal[0] -> '4th'
// ...
// colors[10] -> ordinal[0] -> '11th'
// colors[11] -> ordinal[0] -> '12th'
// colors[12] -> ordinal[0] -> '13th'
// ...
// colors[19] -> ordinal[0] -> '20th'
// *colors[20] -> ordinal[1] -> '21st' - function restarts here and repeats in every 100th cycle.

// So there is a need to define a function f(index) that returns the proper ordinal number.
// (0+1) % 10 = 1 -> 'st'
// (1+1) % 10 = 2 -> 'nd'
// (2+1) % 10 = 3 -> 'rd'
// (3+1) % 10 = 4 -> 'th'
// (4+1) % 10 = 5 -> 'th'
// ...
// !(10+1) % 10 = 1 -> 'st' - mistake!
// *(10+1) % 100 = 11 -> 'th' - correct!
// *(11+1) % 100 = 12 -> 'th' - correct!
// *(12+1) % 100 = 13 -> 'th' - correct! - there are 3 edge cases for 11, 12, 13.
// (13+1) % 10 = 4 -> 'th'
// ...
// (20+1) % 10 = 1 -> 'st' - restarting the pattern.

// Initialize the position array with proper values using new Array(), .fill(null).map((_, index) => index + 1)).
let position = new Array(colors.length).fill(null).map((_, index) => index + 1);
// Explanaion: .map((_, index) => index + 1) maps index of each element of a null values filled array of length of colors array to its 1-based value.
// e.g. if index = 0, position[0] = 1, and so on.

// Function for getting the ordinal suffix using ternary operator and ordinal array.
const getOrdinalSuffix = (index) => {
    return position[index] % 100 >= 11 && position[index] <= 13
        ? ordinal[0] // handling numbers 11, 12 and 13 edge case.
        : ordinal[position[index] % 10] || ordinal[0];
    /**  where the logical operator || ordinal[0]
     *   is used to handle undefined cases of
     *   ordinal array(e.g.for values 4, 5, 6, 7, 8, 9, 14, 15...) */
};

// Function for displaying the colors in the required order using the ordinal suffix function, .map() and.join() methods.
const displayColors = (array) => {
    return array
        .map((color, index) => {
            return `${position[index]}${getOrdinalSuffix(index)} choice is ${color}.`;
        })
        .join('\n'); // joining the array elements with a newline character in a string.
};

console.log(displayColors(colors));

// took 2.5 hrs to complete this exercise.
