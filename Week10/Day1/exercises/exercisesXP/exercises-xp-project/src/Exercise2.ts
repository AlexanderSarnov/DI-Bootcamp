// Exercise 2: Type Annotations
// Instructions
// Define a variable age of type number and a variable name of type string, and log them to the console.

// *Note: cannot redeclare variable name, thus I decided to create an object.
// Define an object type for Person
interface Person {
    age: number; // variable to store age
    name: string; // varidble to store name
}

// Create a person object
const person: Person = {
    age: 30,
    name: 'John',
};

console.log(`age is ${person.age}, name is ${person.name}`);
