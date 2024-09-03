// Using this array :

const colors = ['Blue', 'Green', 'Red', 'Orange', 'Violet', 'Indigo', 'Yellow'];
// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
// Hint : Use the array methods taught in class. Look at the lesson Array Methods.

// Part 1, Solution 1: Using Array.map()
let displayColors = (array) => {
    return array.map((element, index) => {
        return `${index + 1}# choice is ${element}`;
    });
};
console.log(displayColors(colors));

// Part 1, Solution 2: In a single line using Array.map() and .join()

let displayColorsInSingleLine = colors.map((element, index) => `${index + 1}# choice is ${element}`).join('\n');

console.log(displayColorsInSingleLine);

// Part 2, Solution 1, using Array.includes():
let includesViolet = (array) => {
    array.includes('Violet') ? console.log('Yeah') : console.log('No...');
};

console.log('\nViolet test using .includes() method: ');
includesViolet(colors);

// Part 2, Solution 2, using Array.some():
let includesVioletSome = (array) => {
    array.some((color) => color === 'Violet') ? console.log('Yeah') : console.log('No...');
};

console.log('\nViolet test using .some() method: ');
includesVioletSome(colors);

// Part 3 - unexpected result (typo in the function implementation, missing closing parenthesis after 'Violet'):
let unexpectedResult = (array) => {
    array.some((color) => (color === 'Violet' ? console.log('Yeah') : console.log('No...')));
};

unexpectedResult(colors); // This will print 'No...' for each color in the array, because the console.log inside the .some().
