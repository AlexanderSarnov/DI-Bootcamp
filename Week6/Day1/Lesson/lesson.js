// *Async JS

// When fetching data from an API, it may take some time to get the response. Ans we need to wait for the response before proceeding with the rest of the code.
// This is where async functions come in handy. An async function always returns a Promise.

// *Promise:
// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation.

// *Async / Await function:
// An async function is a function that returns a Promise. It can contain await expressions, which pause the execution of the async function and wait for a Promise to resolve.

// *Callbacks:
// Callbacks are functions that are passed as arguments to other functions to be executed later.

// !Note: Currently we mostly use async/await syntax to handle promises.

// setTimeout is a simple example of an async function ustilising callbacks function as an argument.
// Example

// function myAsyncFunction(callback) {
//     setTimeout(() => {
//         callback("Hello from async function!");
//     }, 2000);
// }

// *Experimental funciton:
// function getX() {
//     setTimeout(() => {
//         return 5;
//     }, 3 * 1000);
// }

// function getY() {
//     return 6;
// }

// function getXY() {
//     let x = getX();
//     console.log('x: ' + x);
//     let y = getY();
//     console.log('y: ' + y);

//     let sum = x + y;
//     console.log('sum: ', sum);
// }
// getXY();

// One solution in order to retrieve x and y values simultaneously is a callback function.

// function myCallback() {
//     // fucntion that we want to execute
//     console.log('myCallback executed');
// }

// function exeCallback(func) {
//     // function that will execute any function that is given as a parameter
//     func();
// }

// exeCallback(myCallback); // Output: myCallback executed

// *Experimental funciton:
// function getX(callback) {
//     setTimeout(() => {
//         callback(5);
//     }, 3000);
// }

// function callX() {
//     getX((x) => console.log('x from callback: ', x));
// }
// callX();

// *Experimental funciton:
// function getX(callback) {
//     setTimeout(() => {
//         callback(5);
//     }, 1000);
// }

// function getY(callback) {
//     setTimeout(() => {
//         callback(6);
//     }, 2000);
// }

// function getXY() {
//     getX((x) => {
//         console.log('x from callback: ', x);
//         getY((y) => {
//             console.log('y from callback: ', y);
//             let sum = x + y;
//             console.log('sum: ', sum);
//         });
//     });
// }
// getXY();

// This approach leads to a callback hell, when for every parameter we need a nested callback function in order to start working with the data when it is available.

// *Async / Await function and Promises:
// !Note: Promise either resolves (with a value) or rejects (with an error).

// Promise.resolve(value) creates a resolved promise with the given value.
// Promise.reject(error) creates a rejected promise with the given error.

// *Promise Syntax:
// let promiseSyntax = new Promise((resolve, reject) => {
//     // promise object is created here
// });

// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(5);
//     }, 4 * 1000);
// });

// use promise syntax and .then() to handle promise resolution
// console.log(p); // Output: Promise { <pending> }

//.then() takes a function as an argument and executes it when the promise is resolved.
// p.then((value) => {
//     console.log('value from promise: ', value);
// }).catch((error) => {
//     console.log('error from promise: ', error);
// });

// function getXAsync() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(5);
//         }, 2 * 1000);
//     });
// }

// function getYAsync() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(6);
//         }, 3 * 1000);
//     });
// }

// getXAsync.then((x) => {
//     console.log('x from async: ', x);
//     getYAsync.then((y) => {
//         console.log('y from async: ', y);
//         console.log('x + y from async: ', x + y);
//     });
// });

// *flip a coin Example
// const flip = () => {
//     const coin = Math.floor(Math.random() * 2);
//     return coin === 0 ? 'Heads' : 'Tails';
// };

// const flipcoinAsync = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const result = flip();
//             if (result === 'Heads') {
//                 resolve('You win: ' + result);
//             } else if (result === 'Tails') {
//                 reject('You lose: ' + result);
//             }
//         }, 1000);
//     });
// };

// flipcoinAsync()
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// *Exercise
/** 1. getDataFromServer function return a Promise with users data
 * as Array of objects from server as json
 * Simulate successful completion after 2 seconds
 *
 * 2. Call this function and log the data as an Array datatype
 *
 * 3. Simulate an error
 *
 * 4. return to step 2, and create render function
 * that will display the users on the html page
 * */

// const users = [
//     { username: 'aaa', email: 'aaa@gmail.com' },
//     { username: 'bbb', email: 'bbb@gmail.com' },
//     { username: 'ccc', email: 'ccc@gmail.com' },
// ];

// function getDataFromServer(arr) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (arr) {
//                 resolve(JSON.stringify(arr, undefined, 2));
//             } else {
//                 reject('Error fetching data');
//             }
//         }, 2000);
//     });
// }

// getDataFromServer(users)
//     .then((data) => {
//         console.log(data);
//         console.log(JSON.parse(data));
//         renderUsers(JSON.parse(data));
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// function renderUsers(users) {
//     const userList = users
//         .map((user) => {
//             return `<li>${user.username} - ${user.email}</li>`;
//         })
//         .join('');
//     document.getElementById('user-list').innerHTML = userList;
// }

// *Chain .then() to have different results printed in the console after each step

// * Promise static methods: Promise.all(), Promise.race(), Promise.reject()

// *Promise.resolve()
// function getX() {
//     // use static method to create resolved promise
//     return Promise.resolve(5);
// }

// // *Promise.reject()
// function getX(a) {
//     if (a) return Promise.resolve(5);
//     else return Promise.reject('Error: Value is not provided');
// }
// console.log(getX(true)); // Output: Promise { <resolved>: 5 }

// * Other static methods:
/**
Promise.all(arrayOfPromises)
Promise.allSettled(arrayOfPromises)
Promise.race(arrayOfPromises)
Promise.any(arrayOfPromises)
 */

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('resolved promise1');
//     }, 2 * 1000);
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve('resolved promise2');
//         reject('rejected promise2');
//     }, 3 * 1000);
// });

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('resolved promise3');
//     }, 4 * 1000);
// });

// let arrayOfPromises = [promise1, promise2, promise3];
// console.log(Promise.all(arrayOfPromises)); // Output: Promise { <pending> }

// *With .all(), all promises must be resolved to resolve the overall promise.
// Promise.all(arrayOfPromises)
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         // catch error and return it
//         console.log(error);
//     });

// *Promise.allSettled(arrayOfPromises) //(will show the reject and reason and will show the resolved promises as well in an array)
// Promise.allSettled(arrayOfPromises)
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         // catch error and return it
//         console.log(error);
//     });

// *Promise.race() returns the first fulfilled or rejected promise
// Promise.race(arrayOfPromises).then((result) => {
//     console.log(result);
// }); // Output: resolved promise1 -

// *Promise.any() returns a promise that resolves to true if any of the promises in the array are fulfilled (thus returns first fulfilled promise), or "all rejected" in catch block if all promises are rejected. (if no catch block is provided then it stops code execution).

/**
 * this execution order
 *
 * microtask: promise - higher priority than macrotask
 * macrotask: setTimeout
 */
// console.log('3');

// setTimeout(() => {
//     console.log('1');
// }, 0);

// let p = Promise.resolve();
// p.then((ret) => console.log('2'));

console.log('1');
setTimeout(() => {
    console.log('2');
}, 0);
new Promise((resolve) => {
    console.log('3');
    resolve();
}).then(() => console.log('4'));
console.log('5');

// Output: 1, 3, 5, 4, 2

/** 
Order of Execution:

console.log('1'); is executed synchronously, logging ‘1’.
setTimeout(() => { console.log('2'); }, 0); is scheduled to run after 0 milliseconds, added to the macrotask queue.
new Promise((resolve) => { console.log('3'); resolve(); }) is executed synchronously:
console.log('3'); logs ‘3’.
resolve(); resolves the promise, adding the then callback to the microtask queue.
console.log('5'); is executed synchronously, logging ‘5’.
The synchronous code is now complete. The event loop checks the microtask queue first:
The then callback console.log('4'); is executed, logging ‘4’.
Finally, the event loop checks the macrotask queue:
The setTimeout callback console.log('2'); is executed, logging ‘2’.
Final Output:

1
3
5
4
2

This order is due to the event loop prioritizing microtasks (Promises) over macrotasks (setTimeout).
*/
