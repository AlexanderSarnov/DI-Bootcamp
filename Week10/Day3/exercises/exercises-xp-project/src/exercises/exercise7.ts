// Exercise 7: Type Assertions and Generic Constraints
// What You Will Learn
// Use type assertions to refine types in complex scenarios.
// Apply generic constraints to ensure type safety.
// Task
// Create a generic function formatInput that takes a parameter of type T constrained to have a toString() method. Use type assertions to ensure the parameter is treated as a string for formatting. The function should format the input as a string.

// Define an interface for the constraint
interface HasToString {
    toString(): string;
}

// Create the generic function
function formatInput<T extends HasToString>(input: T): string {
    // Use type assertion to ensure the parameter is treated as a string
    let formattedInput = input.toString() as string;
    // Format the input as needed
    return `Formatted input: ${formattedInput}`;
}

// Test with different types
console.log(formatInput('Hello, World!')); // Output: "Formatted input: Hello, World!"
console.log(formatInput(12345)); // Output: "Formatted input: 12345"
console.log(formatInput({ toString: () => 'Custom object' }));
