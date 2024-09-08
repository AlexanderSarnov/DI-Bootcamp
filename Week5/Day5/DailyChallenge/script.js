// Create a function that:

// takes in two strings as two parameters
// and returns a boolean that indicates whether or not the first string is an anagram of the second string.

// Using a character map
function isAnagram(str1, str2) {
    // Preprocess strings (remove non-alphanumeric characters and convert to lowercase)
    const cleanStr1 = str1.toLowerCase().replace(/\s/g, '');
    const cleanStr2 = str2.toLowerCase().replace(/\s/g, '');

    // Check string lengths after preprocessing
    if (cleanStr1.length !== cleanStr2.length) return `"${str1}" is not an anagram of "${str2}"`;

    // Preview strings
    // console.log(cleanStr1, cleanStr2);

    // Create a character map for the first string
    const charCount = new Map();
    for (let char of cleanStr1) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // Preview map
    // console.log(charCount)

    // Iterate through the second string and check for matching frequencies
    for (let char of cleanStr2) {
        if (!charCount.has(char) || charCount.get(char) === 0) {
            return `"${str1}" is not an anagram of "${str2}"`;
        }
        charCount.set(char, charCount.get(char) - 1); // Decrement count for the character found
    }

    // If all characters in the second string were found in the first with matching frequencies, it's an anagram
    return `"${str1}" is an anagram of "${str2}"`;
}

console.log(isAnagram('Astronomer', 'Moon starer'));
console.log(isAnagram('School master', 'The classroom'));
console.log(isAnagram('The Morse Code', 'Here come dots'));
