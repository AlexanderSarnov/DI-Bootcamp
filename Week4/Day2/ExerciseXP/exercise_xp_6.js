// Exercise 6 : Rudolf
// Instructions
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
};
// Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”
let phrase = [];
for (const key in details) {
    phrase.push(key)
    phrase.push(details[key])
};
console.log(phrase.join(' ')); // Output: "my name is Rudolf the reindeer"