// Exercise 6 : Rudolf
// Instructions
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
};
// Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”
for (const key in details) {
    console.log(key, details[key])
};