// !Using || operator to set the default output (when all parameters are false OR returns the last parameter)
var person = {
    name: 'Jack',
    age: 34,
};
console.log(person.job || 'unemployed');
// 'unemployed'

// !Using && operator to set the code executed when operators are true
var person = {
    name: 'Jack',
    age: 34,
};
console.log(person.age > 18 && 'Driving allowed');
// 'Driving allowed'
