// Exercise 5: Generic Constraints
// What You Will Learn
// Use generic constraints to limit type usage.
// Create a generic function that works with constrained types.
// Task
// Create a generic function logLength that takes a parameter of type T constrained to types with a length property (like string or Array). The function should log the length.

// Define an interface for the constraint
interface HasLength {
    length: number;
}

// Create the generic function with the constraint
function logLength<T extends HasLength>(item: T): void {
    console.log(`Length: ${item.length}`);
}

// Test with a string
logLength('Hello, TypeScript!'); // Output: Length: 18

// Test with an array
logLength([1, 2, 3, 4, 5]); // Output: Length: 5

// Test with an object that has a length property
const objWithLength = { length: 10, description: 'I have a length property' };
logLength(objWithLength); // Output: Length: 10
