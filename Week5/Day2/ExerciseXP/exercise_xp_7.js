// Exercise 7 : Secret Group
// Instructions
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// A group of friends have decided to start a secret society.The society’s name will be the first letter of each of their names sorted in alphabetical order.
//     Hint: a string is an array of letters
// Console.log the name of their secret society.The output should be “ABJKPS”

// 1. Sort the names in alphabetical order
const sortedNames = names.sort();

// 2. Initialize an empty string to store the secret society name
let secretSocietyName = "";

// 3. Extract the first letter from each sorted name and concatenate them
for (const name of sortedNames) {
    secretSocietyName += name[0]; // Add the first letter of the current name
}

// 4. Console log the secret society name
console.log("The secret society name is:", secretSocietyName);