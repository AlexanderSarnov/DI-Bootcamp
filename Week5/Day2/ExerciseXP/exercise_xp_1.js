// Exercise 1 : List Of People
// Instructions

// Given List Of People
const people = ["Greg", "Mary", "Devon", "James"];


// Part I - Review About Arrays

// Write code to remove “Greg” from the people array.
// Using shift array method
people.shift();

console.log(people);

// Write code to replace “James” to “Jason”.
// using index method
let jamesIndex = people.indexOf("James");
let personJason = "Jason";
people[jamesIndex] = personJason; // Accessing array at specific index and reassining its value

console.log(people);

// Write code to add your name to the end of the people array.
// Using push array method
let myName = "Alexander";
people.push(myName);

console.log(people);

// Write code that console.logs Mary’s index.take a look at the indexOf method on Google.
console.log(people.indexOf("Mary"));

// Write code to make a copy of the people array using the slice method.
//     The copy should NOT include “Mary” or your name.
//     Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method
let lastIndex = people.length - 1;
const otherPeople = people.slice(1, lastIndex); // Slice from element index 1 to last element, not including last element

console.log(otherPeople);


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