// Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”
// Promise that resolves with the value 3
const resolvedPromise = Promise.resolve(3);

// Promise that rejects with the error "Boo!"
const rejectedPromise = Promise.reject("Boo!");

// Consuming the resolved Promise
resolvedPromise
    .then(value => console.log(value))
    .catch(error => console.error(error)); // Will not execute

// Consuming the rejected Promise
rejectedPromise
    .then(value => console.log(value)) // Will not execute
    .catch(error => console.error(error));

