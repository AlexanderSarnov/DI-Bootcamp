// console.log('Welcome to my Node.js application!');
// how to run this file: node app.js (but first navigate to the project directory)

// let arr = ['apple', 'banana', 'cherry'];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// when running this code on a node.js server we don't have the window object, so we can't use DOM methods and all of its evcents.

// console.log(this); // there is no 'this' property! {}

// The default browser behavior is that it can't read and write to the file system (fs) directly. Node.js allows us to do that.
const math = require('../math/utils/math.js'); // importing the math module (a separate file) - using the ../ to go up one directory level.

const hello = (name) => {
    return `Hello, ${name}! Welcome to Nods.js!`;
};

// console.log(hello('Alexa'));

const getName = (name) => {
    return `My name is ${name}`;
};

console.log(math.plus(5, 3)); // 8

module.exports = {
    hello: hello, // exporting the function hello so it can be used in other files.
    getName, // exporting the function getName so it can be used in other files. Using the shorthand syntax.
};
