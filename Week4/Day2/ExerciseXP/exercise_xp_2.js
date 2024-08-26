// Exercise 2 : Your Favorite Colors
// Instructions
// Create an array called colors where the value is a list of your five favorite colors.
const colors = ["teal", "forest green", "deep purple", "sunshine yellow", "sky blue"];

// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
//     Hint : create an array of suffixes to do the Bonus\

// Define a suffix replacing function
function getSuffix(number) {
    const suffixes = ["st", "nd", "rd", "th"];
    const tensDigit = Math.floor(number / 10) % 10; // Extract the tens digit
    const onesDigit = number % 10; // Extract the ones digit

    if (tensDigit === 1) {
        return "th"; // Special case for integer number between 10 and 19
    }

    // Otherwise, choose suffix based on ones digit
    return suffixes[onesDigit - 1] || "th";
}

for (let i = 0; i < colors.length; i++) {
    const colorNumber = i + 1;
    const suffix = getSuffix(colorNumber);

    console.log(`My ${colorNumber}${suffix} choice is ${colors[i]}.`);
}
