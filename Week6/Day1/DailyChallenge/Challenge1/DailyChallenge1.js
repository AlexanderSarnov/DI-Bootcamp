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

function makeAllCaps(arrayOfWords) {
    return new Promise((resolve, reject) => {
        const allStrings = arrayOfWords.every((element) => typeof element === 'string');
        if (allStrings) {
            resolve(arrayOfWords.map((word) => word.toUpperCase()));
        } else {
            reject('Not all of the words are strings');
        }
    });
}

function sortWords(arrayOfWords) {
    return new Promise((resolve, reject) => {
        if (arrayOfWords.length > 4) {
            resolve(arrayOfWords.sort());
        } else {
            reject('Array length is not greater than 4');
        }
    });
}

// Test:

//in this example, the catch method is executed
makeAllCaps([1, 'pear', 'banana'])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

//in this example, the catch method is executed
makeAllCaps(['apple', 'pear', 'banana'])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

//in this example, you should see in the console,
// the array of words uppercased and sorted
makeAllCaps(['apple', 'pear', 'banana', 'melon', 'kiwi'])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
    .catch((error) => console.log(error));

// First Test Case: The promise is rejected immediately, so the catch block is executed and logs “Not all of the words are strings”.
// Third Test Case: The promise resolves successfully, and the .then callbacks are added to the microtask queue. Since microtasks are processed before macrotasks, the result “[ ‘APPLE’, ‘BANANA’, ‘KIWI’, ‘MELON’, ‘PEAR’ ]” is logged before the second test case’s rejection.
// Second Test Case: The promise resolves, but the .then callback checks the array length and rejects the promise. The .catch callback is added to the microtask queue and is processed after the third test case’s microtasks, logging “Array length is not greater than 4”.
