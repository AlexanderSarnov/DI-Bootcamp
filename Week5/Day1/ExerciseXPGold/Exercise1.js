// Exercise 1 : Nested functions

// Using the code below, and before executing it, predict the outcome and explain how you came to this conclusion.

// Change the code below to nested arrow functions. (see Section 2)

// Section 1 : Regular Functions

let landscape = function () {
    let result = ''; // creates an empty string to store the final result

    let flat = function (x) {
        // flat variable to hold the function of x, where x is the number of iterations of incrementing counter from 0 to x. In the process adding '_' to result upon each iteration.
        for (let count = 0; count < x; count++) {
            result = result + '_';
        }
    };

    let mountain = function (x) {
        // mountain variable to hold the function of x, where x is the number of iterations of incrementing coununer from 0 to x, in the process adding '/' in the beginning and "'" to result upon each iteration and adding a '\' to result upon completion of the for loop.
        result = result + '/';
        for (let counter = 0; counter < x; counter++) {
            result = result + "'";
        }
        result = result + '\\';
    };

    flat(4); // will genereate a string of '____'
    mountain(4); // will generate a single string high mountain "/''''\"" attached to the flat element.
    flat(4); // will generate another string of '____' attached to the mountain element.

    return result;
};

console.log('landscape: ', landscape()); // Output: "____/''''\____" (added a console.log to print the result)

// Section 2 : Arrow Functions

const arrowLandscape = (x) => {
    // took the idea from the last exercise of the module. That was a great experience!
    const g = (x) => {
        let mountain = '/';
        for (let count = 0; count < x; count++) {
            mountain += "'";
        }
        mountain += '\\';
        return mountain;
    };

    const f = (mountain) => {
        const plainStart = '_'.repeat(x);
        const plainEnd = '_'.repeat(x);
        return plainStart + mountain + plainEnd;
    };

    return f(g(x));
};

// Using the function
const result = arrowLandscape(4);
console.log('arrowLandscape: ', result); // Output: "____/''''\____"
