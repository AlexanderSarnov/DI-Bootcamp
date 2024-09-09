//Exercise1
const people = ["Greg", "Mary", "Devon", "James"]
// delete 1st element
// use shift() method -> delete 1st element and shift the remaining elements to the new indeces
people.shift()
console.log(people); // Output: ["Mary", "Devon", "James"]

// Write code to replace “James” to “Jason”.
// Utilize .splice method .splice(index to start with, how many elements to replace, what to insert, what to insert, ..., what to insert)
people.splice(2, 1, "Jason");
console.log(people); // Output: ['Mary', 'Devon', 'Jason']

// Write code to add your name to the end of the people array.
// May use .push() or .splice() (an overkill)
people.push("Alex")
console.log(people); // Output: ['Mary', 'Devon', 'Jason', 'Alex']

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
// indexOf() returns index of an element or -1 if not in array
console.log(`Index of "Mary" is ${people.indexOf("Mary")}`);
