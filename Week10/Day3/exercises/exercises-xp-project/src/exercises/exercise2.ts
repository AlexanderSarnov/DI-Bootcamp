// Exercise 2: Type Guards with Union Types
// What You Will Learn
// Use type guards to handle different types.
// Perform actions based on the input type.
// Task
// Create a function describeValue that accepts number | string. Use type guards to return a description based on the input type:

// "This is a number" for numbers.
// "This is a string" for strings.

function describeValue(value: number | string): string {
    if (typeof value === 'number') {
        return `The value is a number: ${value}`;
    } else {
        return `The value is a string: ${value}`;
    }
}

console.log(describeValue('The ultimate answer to life, the universe, and everything is...'));
console.log(describeValue(42));
