// Exercise 3: User & id
// Instructions
// Using this object
const users = { user1: 18273, user2: 92833, user3: 90315 };

// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.

// Part 1: Using Object.entries()
let entries = Object.entries(users); // method Object.entries() returns an array of key-value pairs for each entry in the object.
console.log(entries);

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

// Part 2: Using Array.map() on the entries array and storing the result in a modifiedEntries array.
let modifiedEntries = entries.map(([key, value]) => [key, value * 2]);
console.log(modifiedEntries);
