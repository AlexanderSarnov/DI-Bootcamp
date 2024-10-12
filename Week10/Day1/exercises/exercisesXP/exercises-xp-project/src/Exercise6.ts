// Exercise 6: Object Type Annotations

// Instructions
// Define the Object Structure:
// Create an object type annotation that defines the shape of a Person object. The object should have two properties: name (a string) and age (a number).

// Create the Function:

// Write a function named createPerson that takes two parameters: name (string) and age (number).
// The function should return an object that matches the Person structure.

// Test the Function:

// Test the createPerson function by creating a person and logging the result to the console.

type NewPerson = {
    name: string;
    age: number;
};

const createPerson = (name: string, age: number): NewPerson => {
    return { name, age };
};

const newPerson = createPerson('Test', 24);

console.log(newPerson);
