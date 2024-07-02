// Exercise 2 : Your Favorite Colors
// Instructions
// Create an array called colors where the value is a list of your five favorite colors.
const colors = ["teal", "forest green", "deep purple", "sunshine yellow", "sky blue"];

// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
//     Hint : create an array of suffixes to do the Bonus
for (let i = 0; i < colors.length; i++) {
    // Use i + 1 for correct color number (starts from 1)
    let colorNumber = i + 1;

    // Bonus: Choose suffix based on number
    const suffixes = ["st", "nd", "rd", "th", "th"];
    let suffix = suffixes[i]

    console.log("My " + colorNumber + suffix + " choice is " + colors[i]);
}
/* 
Althogh there exists more general solution for longer list with modulus of the i for suffixes it is not reasonable to implement it here, IMHO
*/