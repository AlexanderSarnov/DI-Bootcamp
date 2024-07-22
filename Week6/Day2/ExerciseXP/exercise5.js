// Instructions
// Using this array 
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Use the reduce() method to combine all of these into a single string.
const reduceEpic = epic.reduce((acc, current) => acc + " " + current).trim(/\s+$/); // concatenate elements of the array and effectively clean leading and ending whitespace

console.log(reduceEpic);