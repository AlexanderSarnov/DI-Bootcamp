// I use atom with no extensions to write the code
// so no prettier, tabnine, copilot and etc. do not disturb me

// Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself
// in 4 seconds and returns a “success” string.

// function resolveItselfInFourSeconds() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('success');
//         }, 4000); // 4 seconds!
//     });
// }
//
// resolveItselfInFourSeconds()
//   .then((message) => {
//     console.log(message); // Should log "success" after 4 seconds delay
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise
// that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise
// that will reject itself with the string “Boo!”
// const resolvedPromise = Promise.resolve(3);
// const rejectedPromise = Promise.reject('Boo!');

// Promises consumption .then() and .cathc()
// resolvedPromise
//   .then(value => console.log(value))
//   .catch(error => console.log(error));
//
// rejectedPromise
//   .then(value => console.log(value))
//   .catch(error => console.log(error));

// Exercise 1 : Promise.all()
// Instructions
// Use the Promise.all that will accept the 3 promises below.
// The method should accept an array of promises and return an array of resolved values.
// If any of the promises are rejected, the function should catch them.
// Explain in a comment how Promise.all work and why you receive this output.

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, 'foo');
// });
// // expected output: Array [3, 42, "foo"]
//
// const arrayOfPromises = [promise1, promise2, promise3];
//
// Promise.all(arrayOfPromises)
//   .then((values) => console.log(values))
//   .catch((error) => console.log("Error: ", error));

// 1st daily challenge
// Create two functions. Each function should return a promise.

// The first function called makeAllCaps(),
// takes an array of words as an argument
// If all the words in the array are strings, resolve the promise.
// The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.

// The second function called sortWords(),
// takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise.
// The value of the resolved promise is
// the array of words sorted in alphabetical order.
// else, reject the promise with a reason.

// function makeAllCaps(arrayOfWords) {
//   return new Promise ((resolve, reject) => {
//     const allStrings = arrayOfWords.every(element => typeof element === 'string')
//     if(allStrings) {
//       resolve(arrayOfWords.map(word => word.toUpperCase()));
//     } else {
//       reject("Not all of the words are strings");
//     }
//   });
// }
//
// function sortWords(arrayOfWords) {
//  return new Promise ((resolve, reject) => {
//    if(arrayOfWords.length > 4) {
//      resolve(arrayOfWords.sort());
//    } else {
//      reject("Array length is not greater than 4");
//    }
//  });
// };
//
// // Test:
//
// //in this example, the catch method is executed
// makeAllCaps([1, "pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))
//
// //in this example, the catch method is executed
// makeAllCaps(["apple", "pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))
//
// //in this example, you should see in the console,
// // the array of words uppercased and sorted
// makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
//       .catch(error => console.log(error))
