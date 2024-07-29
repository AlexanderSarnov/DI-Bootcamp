// Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success");
    }, 4000);
})

// Consuming myPromise
myPromise
    .then((result) => {
        console.log(result); // Output: "success" --> delayed by 4 sec
    });