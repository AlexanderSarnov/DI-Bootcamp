// Instructions

// 1st Daily Challenge

// Create two functions.Each function should return a promise.

// The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise.The value of the resolved promise is the array of words uppercased.
//     else, reject the promise with a reason.
function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
        if (words.every(word => typeof word === 'string')) { // Uses every method for efficiency
            const uppercasedWords = words.map(word => word.toUpperCase());
            resolve(uppercasedWords);
        } else {
            reject('Array contains non-string elements');
        }
    });
}

// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise.The value of the resolved promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.
function sortWords(uppercasedWords) {
    return new Promise((resolve, reject) => {
        if (uppercasedWords.length > 4) {
            const sortedWords = uppercasedWords.sort(); // Uses built-in sort method
            resolve(sortedWords);
        } else {
            reject('Array must have more than 4 elements'); // Clarified rejection message
        }
    });
}


// Test:
// in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error)) // Output: Array contains non-string elements

// in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error)) // Output: Array must have more than 4 elements

// in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result)) // Output: ["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
    .catch(error => console.log(error))


// Output: