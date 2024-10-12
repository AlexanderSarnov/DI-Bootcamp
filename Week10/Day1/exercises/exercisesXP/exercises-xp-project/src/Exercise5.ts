// Exercise 5: Tuple Types

// Instructions
// Create a function getDetails that takes a name and age as input and returns a tuple containing the input values and a greeting message.
// The tuple should contain multiple values of different types

const getDetails = (name: string, age: number): [string, number, string] => {
    const greeting = `Hello, ${name}! You are ${age} years old.`;
    return [name, age, greeting]; // Return a tuple containing the input values and the greeting message
};

// Call the function and log the tuple
const details = getDetails('Alice', 25);
// Expected output
console.log(details); // Output: ['Alice', 25, 'Hello, Alice! You are 25 years old.']
