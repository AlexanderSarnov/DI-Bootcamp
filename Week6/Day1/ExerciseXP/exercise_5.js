// Exercise 5 : Kg And Grams

// Function that converts kg to grams (Hint: 1 kg is 1000 gr)
function kgToGrConverter(value) {
    return value * 1000; // Return the weight in grams
}

// Function declaration invocation
console.log(kgToGrConverter(1)); // Output: 1000

// Function expression with comment on the difference
const kgToGrConverter2 = function (value) {
    return value * 1000; // Return the weight in grams
};

// Difference between function declaration and expression (one line comment)
// Function declarations are hoisted, have their own `this` context, and can be named or anonymous. Function expressions are not hoisted, inherit `this` context from surrounding scope, and must be anonymous.

// Finally, use a one line arrow function and invoke it.
((value) => console.log(kgToGrConverter2(value)))(3); // Return the weight in grams