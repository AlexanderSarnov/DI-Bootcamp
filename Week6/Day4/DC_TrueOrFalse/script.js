// Instructions
// Create a function that returns true if all parameters are truthy, and false otherwise.

// Examples
// allTruthy(true, true, true) ➞ true

// allTruthy(true, false, true) ➞ false

// allTruthy(5, 4, 3, 2, 1, 0) ➞ false

allTruthy = (...args) => {
    // Use the spread operator (...) to pass all arguments to the function as an array. Where the length of the array is greater than 0.
    return args.every((arg) => Boolean(arg)); // Check if all args are truthy using the Boolean() function and the every() method.  Returns true if all are truthy, false otherwise.
};

console.log(allTruthy([], {}, true)); // true

console.log(allTruthy(5, 4, 3, 2, 1, 0)); // false, because 0 is falsy.
