// Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
const family = {
    mom: "Jane Doe",
    dad: "John Doe",
    sibling1: "Alice Doe",
    grandparent: "Grandma Mary",
    pet: "Max (the dog)",
};
// Using a for in loop, console.log the keys of the object.
for (const key in family) {
    console.log(key)
};
// Using a for in loop, console.log the values of the object.
for (const key in family) {
    console.log(family[key])
};