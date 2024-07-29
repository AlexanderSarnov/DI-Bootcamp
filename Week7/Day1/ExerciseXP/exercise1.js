// Exercise 1 : Comparison
// Instructions
// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than or equal to 10
// the promise rejects if argument is greater than 10.
function compareToTen(num) { // creating a function
    return new Promise((resolve, reject) => { // returning a promise
        if (num <= 10) { // initializing conditions
            resolve(num);
        } else (
            reject(`${num} is greater than 10`)
        )
    });
}

// Test:

//In the example, the promise should reject
compareToTen(15) // Consuming promise
    .then(result => console.log(result))
    .catch(error => console.log(error))

//In the example, the promise should resolve
compareToTen(8) // Consuming promise
    .then(result => console.log(result))
    .catch(error => console.log(error))