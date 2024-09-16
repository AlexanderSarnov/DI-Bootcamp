const greeting = require("./greeting.js");
// syntax to use function from another file
// ./ - to show that file is in the same directory with app.js
const person = require("./person.js");
// imports all that was defined to be exported from person.js
// file in the same dir as app.js
const { personName, personCar } = require("./person.js");
// same using deconstruction
const hello = require("./hello.js")

const appName = "Mike Taylor"; // assign value to a name variable

greeting(appName); // call greeting function with the value of name variable

console.log(person.personName, person.personCar); // Mike Taylor Ford Mustang

console.log(personName, personCar);

// !Note - remember to use unique names of variables in all files,
// to avoid errors in main.js (or app.js)

hello(); // !!"Hello, Node" is the first executed line of code!!
// from hello.js > line 10 > console.log("Hello, Node!");
