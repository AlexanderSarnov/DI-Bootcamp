// const a = 4;
// const b = 5;

// setTimeout(() => {
//   console.log(a + b); // run it in console: node script.js
// }, 3000);
// console.log(5);
// console.log(__dirname);

const pizza = require("./pizza.js");

pizza.make_pizza(16, 'pepperoni');
pizza.make_pizza(12, "mushrooms", "green peppers", "extra cheese");
