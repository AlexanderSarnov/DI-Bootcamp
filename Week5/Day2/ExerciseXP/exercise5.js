// Instructions
// Using this array 
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Use the reduce() method to combine all of these into a single string.
const reduceEpic = epic.reduce((acc, current) => acc + " " + current).trim(); // concatenate elements of the array and .trim() to clen trailing spaces.

console.log(reduceEpic);