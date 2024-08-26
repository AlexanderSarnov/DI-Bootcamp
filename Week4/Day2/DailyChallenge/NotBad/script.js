// Instructions
// Create a variable called sentence.The value of the variable should be a string that contains the words “not” and “bad”.
// For example, “The movie is not that bad, I like it”.

// Create a variable called wordNot where it’s value is the first appearance(ie.the position) of the substring “not” (from the sentence variable).

// Create a variable called wordBad where it’s value is the first appearance(ie.the position) of the substring “bad” (from the sentence variable).

// If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.

// For example, the result here should be: “The movie is good, I like it”
// If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.
//     Example:

//   Your string is: 'This dinner is not that bad ! You cook well',
//     --> the result is: 'This dinner is good ! You cook well'

//   Your string is: 'This movie is not so bad !'
// --> the result is: 'This movie is good !'

//   Your string is: 'This dinner is bad !'
// --> the result is: 'This dinner is bad !'

// Create a function with exercise variables as parameters:
function replaceSubstring(sentence, notWord = "not", badWord = "bad", replacement = "good") {
    const notIndex = sentence.toLowerCase().indexOf(notWord); // Find "not" case-insensitively
    const badIndex = sentence.toLowerCase().indexOf(badWord, notIndex + notWord.length); // Find "bad" after "not" with a space

    // Check if "not" and "bad" are found with a space in between
    if (notIndex !== -1 && badIndex !== -1 && badIndex > notIndex + notWord.length + 1) {
        const modifiedSentence = sentence.slice(0, notIndex) + replacement + sentence.slice(badIndex + badWord.length);
        console.log(modifiedSentence); // Log the modified string
    } else {
        console.log(sentence); // Log the original string (unchanged)
    }
}

replaceSubstring("This dinner is not that bad ! You cook well") // Output: "This dinner is good ! You cook well"
replaceSubstring("This movie is not so bad !") // Output: "This movie is good !"
replaceSubstring("This dinner is bad !") // Output: "This dinner is bad !"