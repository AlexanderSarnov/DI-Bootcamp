// Exercise 1 : List Of People
// Instructions

// Given List Of People
const people = ["Greg", "Mary", "Devon", "James"];
console.log('People array consists of:');

// Iterate through people array and log each person
for (let personIndex = 0; personIndex < people.length; personIndex++) {
    console.log(`No.${personIndex + 1}: ${people[personIndex]}`);
}
console.log("\n");

// Part I - Review About Arrays

// 1. Write code to remove “Greg” from the people array.
// Using shift array method
people.shift();

console.log(`1. Write code to remove “Greg” from the people array.\nOutput: ${people}\n`);

// 2. Write code to replace “James” to “Jason”.
// Initiate variables to store James and Jason and index of James
console.log(`2. Write code to replace “James” to “Jason”.`);

// Define a function to replace person in people array
function replacePersonInPeople(people, personToSearch, personToInsert) {

    const indexOfPersonToSearch = people.indexOf(personToSearch);

    if (people.indexOf(personToSearch) !== -1) {
        // Replace the person
        people[indexOfPersonToSearch] = personToInsert;
        console.log(`${personToSearch} was replaced with ${personToInsert}.\nHere is an updated array of people: ${people}\n`)
    } else {
        // if person to replace not in array, add the person to the array and call the function again
        console.log(`${personToSearch} was not in people array,adding ${personToSearch} as a new record`);
        // Add the person to be replaced
        people.push(personToSearch);
        replacePersonInPeople(people, personToSearch, personToInsert);
    }
    return people;
}

replacePersonInPeople(people, "James", "Jason")


// 3. Write code to add your name to the end of the people array.
// Using push array method
let myName = "Alexander";
people.push(myName);

console.log(`3. Write code to add your name to the end of the people array.\nMy name is ${myName}\nOutput: people array with my name added to the end: ${people}\n`);

// Write code that console.logs Mary’s index.take a look at the indexOf method on Google.
console.log(`4. Write code that console.logs Mary’s index. take a look at the indexOf method on Google.\nOutput: Index of Mary is [${people.indexOf("Mary")}]\n`);

// Write code to make a copy of the people array using the slice method.
//     The copy should NOT include “Mary” or your name.
//     Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method
let lastIndex = people.length - 1;
const otherPeople = people.slice(1, lastIndex); // Slice from element index 1 to last element, not including last element

console.log(`5. Write code to make a copy of the people array using the slice method.\nThe copy should NOT include “Mary” or your name.\nHere is the new array without Me and Mary: ${otherPeople}\n`);


// Write code that gives the index of “Foo”. Why does it return -1 ?
let fooIndex = people.indexOf("Foo");

console.log(fooIndex);
/*
people.indexOf("Foo"): The indexOf method searches for the first occurrence of the value "Foo" in the people array.
Since "Foo" is not present in the array, indexOf returns -1, indicating the element was not found.
*/

//     Create a variable called last which value is the last element of the array.
//         Hint: What is the relationship between the index of the last element in the array and the length of the array ?
let last = people[lastIndex];

console.log(last); // Output: "Alexander"

//             Part II - Loops
// Using a loop, iterate through the people array and console.log each person.
for (let i = 0; i < people.length; i++) {
    console.log(people[i])
};
// Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// Hint: take a look at the break statement in the lesson.
let breakName = "Devon";

for (let i = 0; i < people.length; i++) {
    if (people[i] != breakName) {
        console.log(people[i]) // Output: "Mary"
    } else {
        console.log(people[i]) // Output: "Devon"
        break
    }
};