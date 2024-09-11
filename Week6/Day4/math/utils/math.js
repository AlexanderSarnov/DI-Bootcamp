export const multi = (a, b) => a * b; // Exporting a function multi.
export const divide = (a, b) => a / b;
export const plus = (a, b) => a + b;
export const minus = (a, b) => a - b;

console.log(multi(3, 4)); // Output: 12
console.log(divide(10, 2)); // Output: 5
console.log(plus(5, 6)); // Output: 11
console.log(minus(9, 3)); // Output: 6

// module.exports = {
//     multi,
//     divide,
//     plus,
//     minus,
// };

export default { plus }; // Exporting functions as default functions. This is the new ES6 syntax.

export { multi }; // Exporting all functions as an object.
