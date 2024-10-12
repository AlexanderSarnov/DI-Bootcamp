// Exercise 9: Function Overloading with Default Parameters

// Instructions
// Create an overloaded function greet that can either take a name and greet the person, or take no arguments and return a default greeting.

function greet(name: string): string;
function greet(): string;
function greet(name?: string): string {
    // we need to properly handle the empty string case as well
    if (typeof name === 'string' && name.trim() !== '') {
        return `Hello, ${name}`;
    } else {
        return 'Hello, user!';
    }
}

console.log(greet('Alice'));
console.log(greet(''));
console.log(greet());
