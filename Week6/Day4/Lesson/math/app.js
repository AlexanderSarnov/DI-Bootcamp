// const math = require('./utils/math.js'); // importing the math module (a separate file) - using the relative path.
import { multi } from './utils/math.js'; // importing the math module using ES6 import syntax.

import newAdd from './utils/math.js'; // importing the default function from a separate file.

try {
    // console.log(math.divide(10, 0)); // will throw an error
    console.log(multi(2, 3)); // using ES6 import syntax.
    console.log(newAdd(10, 2)); // using the default function from a separate file.
    console.log('This line will not be executed');
} catch (e) {
    console.error('An error occurred:', e.message);
    console.error('Stack trace:', e.stack);
}

// use npm init -y to create a package.json file and install dependencies for it.

// type can be "module" or "commonjs", default is 'commonjs'.

// module.exports = { add: add, subtract: subtract, multiply: multiply }; // old way of exporting modules.

// exports.add = add; // new way of exporting modules.
