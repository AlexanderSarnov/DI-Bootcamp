const addTo = (x) => (y) => x + y; // nested arrow function that takes 2 argumetns and returns their sum
const addToTen = addTo(10); // declaring a new function that adds 10 to the argument it receives (adds first argument of addTo functiuon, thus becomes a second argument of addTo functiuon)
addToTen(3); // adding 3 to 10, result: 13

console.log(addToTen(3)); // Output: 13
