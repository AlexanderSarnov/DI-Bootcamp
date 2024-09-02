// *Was replaced by let and const 10 years ago

// console.log(x);
// let x = 5 // declaration after console log - fails to
// var can be declared wherever in the code and it will be hoisted

// console.log(thing); // ReferenceError: thing is not defined, due to variable declaration after console.log
var thing = 1; // declaration before console log - works fine (also it is a global variable)

// let and const are block-scoped (they are not hoisted)
function test() {
    let y = 10; // block-scoped (inside the function)
}

// let and const can't be redeclared or updated
let y = 20; // Error: Identifier 'y' has already been declared

// const is a constant and cannot be reassigned or updated

(function test2(variable) {
    let z = 20; // block-scoped (inside the block)
    console.log(variable); // works fine (it is a local variable)
})(thing); // self-invoking function (properly defined)

// console.log(z); // ReferenceError: z is not defined, due to variable declaration outside the block

var num = 8; // var is a global variable
var num = 10; // redeclaration and update of global variable is allowed

console.log(num); // logs 10 as it's the last declared variable

// let and const are not hoisted, so they must be declared before they are used

// #### Exercise

// Change the code so the variable **i** will be undefined outside of the **for loop**

// function numbers() {
//   for (let i = 0; i < 5; i += 1) {
//     console.log(i);
//   }
//     console.log(i);
// }
// numbers();

// Default parameters can be declared with the = operator, but not with the let or const keywords.
function hello(name = 'World') {
    console.log('Hello, ' + name);
}

hello(); // Hello, World (default parameter)
hello('John'); // Hello, John (provided parameter)

// **Rest parameters are declared with ... and can be used to capture all remaining arguments into an array.
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0); // reduce() method is used to calculate the sum of all numbers in the array, it works with all types of values (numbers, strings, booleans, etc.)
}

console.log(sum(1, 2, 3, 4, 5));

// *Conditional (ternary) operator

let a = 10;
let b = 20;

let max = a > b ? a : b; // ternary operator, if a is greater than b, then max is a, otherwise max is b. Speaking in human language in the order of how it is written in the code: check if a is greater than b, if true, assign a to max, otherwise assign b.
console.log(max); // Output: 20

// Ternary operator can also be used to assign a value to a variable, like this: let result = (a > b)? a : b; or in a function: function add(a, b) { return (a > b)? a : b }

// #### Exercise 1

// Create a function to check the year given by the user
// If the year is after 2000, you should display "You are in the 21st century", else you should display "You live in the Middle Age"
function checkYear(year) {
    return year < 2000
        ? 'You are in the Middle Ages'
        : year >= 2000 && year < 2100
        ? 'You are in the 21st century'
        : year >= 2100
        ? 'You are in the future (22nd century and above)'
        : 'You live in a different century';
}

console.log(checkYear(2522)); // Output: You are in the future (22nd century and above)
console.log(checkYear(1999)); // Output: You are in the Middle Ages
console.log(checkYear(2023)); // Output: You are in the 21st century

// The issue of ternary operator in loops can be solved using the 'let' keyword instead of 'var' - it does not have hoisting. It does not allow redeclaration or update. It does not have block scope.

// *Template strings

let name = 'John Doe';
let age = 30;

console.log(`Hello, my name is ${name} and I am ${age} years old.`); // Output: Hello, my name is John Doe and I am 30 years old.

// the power of template strings comes in handy when you need to concatenate strings with variables, or when you need toString methods to work on objects.

// Example:

let person = {
    name: 'John Doe',
    age: 30,
    toString: function () {
        // method to convert object to string, it will be called when toString() method is called on person object.
        return this.name; // returns the name property of the object
    },
};

console.log(`Hello, my name is ${person}`); // Output: Hello, my name is John Doe

// ----------------------------------------------------------------------------

// *Functions

// *Function declaration
// it is hoisted and can be called before it is defined. It can be redeclared and updated, redefined accidentally. It is also a block-scoped function.
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet('John Doe'); // Output: Hello, John Doe!

// *Function expression
// it is not hoisted and can't be called before it is defined
const greet2 = function (name) {
    console.log(`Hello, ${name}!`);
};

greet2('Jane Doe'); // Output: Hello, Jane Doe!

// *Arrow function
// it is a shorter syntax for function expressions and does not have its own this value. It retains the original expression itself and its lexical this value.
const greet3 = (name) => console.log(`Hello, ${name}!`);

greet3('Alice Doe'); // Output: Hello, Alice Doe!

const greet5 = (name) => console.log(`Hello, ${name}!`);

const calculateSum = (a = 0, b = 0) => {
    return a + b;
};
const calculateSum2 = (a = 0, b = 0) => a + b;

// Function parameters can be default values
// if a parameter is not provided, it will use the default value
function greet4(name = 'World') {
    console.log(`Hello, ${name}!`);
}

greet4(); // Output: Hello, World!

greet4('John Doe'); // Output: Hello, John Doe!

// --------------------------------------------------------------------------------

// Exercise

// Using arrow function and ternary operator create a calculator that returns the result of the calculus depending on the operator : +, - , * ,

// The function should be able to to take 2 numbers as parameters
const calculator = (num1 = 5, num2 = 3, operator = '*') => {
    operator === '+'
        ? console.log(num1 + num2)
        : operator === '-'
        ? console.log(num1 - num2)
        : operator === '*'
        ? console.log(num1 * num2)
        : operator === '/'
        ? console.log(num1 / num2)
        : 'Invalid operator';
};

calculator(Math.SQRT2, 5, '*'); // Output: 8

// -------

// *Objects in JavaScript
// Objects in JavaScript are collections of key-value pairs. They are mutable, meaning you can change their properties after they are created. Objects can be created using object literals, constructors, or Object.create.

// Creating Objects
// Using Object Literals
// JavaScript

let obj = {
    key: 'value',
};

console.log(obj.key); // Output: value
console.log(obj['key']); // Output: value

// Adding, Changing, and Deleting Properties
// Adding Properties

obj.name = 'John Doe';
console.log(obj.name); // Output: John Doe

// Changing Properties

obj.name = 'Jane Doe';
console.log(obj.name); // Output: Jane Doe

// Deleting Properties

delete obj.name;
console.log(obj.name); // Output: undefined

// Creating Objects with Object.create()
// The Object.create() method creates a new object with the specified prototype object and properties.

let personNew = {
    name: 'John Doe',
    age: 30,
};

let newPerson = Object.create(personNew);
console.log(newPerson.name); // Output: John Doe

// Copying Properties with Object.assign()
// The Object.assign() method copies all enumerable properties from one or more source objects to a target object.

let personCopy = Object.assign({}, personNew);
console.log(personCopy.name); // Output: John Doe

// Retrieving Property Names and Values
Object.getOwnPropertyNames();
// Returns an array of all enumerable properties (including inherited properties) of a given object.

console.log(Object.getOwnPropertyNames(personNew)); // Output: ["name", "age"]

Object.keys();
// Returns an array of a given object’s own enumerable properties.

console.log(Object.keys(personNew)); // Output: ["name", "age"]

// Object.values()
// Returns an array of a given object’s own enumerable property values.

console.log(Object.values(personNew)); // Output: ["John Doe", 30]

// Object.entries()
// Returns an array of a given object’s own enumerable property [key, value] pairs.

console.log(Object.entries(personNew)); // Output: [["name", "John Doe"], ["age", 30]]

// Object Inheritance
// Objects can inherit properties and methods from other objects using Object.create().

let animal = {
    eat: function () {
        console.log('Eating');
    },
};

let dog = Object.create(animal);
dog.bark = function () {
    console.log('Barking');
};

dog.eat(); // Output: Eating
dog.bark(); // Output: Barking

// Methods in Objects
// Objects can have functions as properties, called methods.

let personVeryNew = {
    name: 'John Doe',
    age: 30,
    greet: function () {
        console.log(`Hello, my name is ${this.name}!`);
    },
};

personVeryNew.greet(); // Output: Hello, my name is John Doe!

// *Advanced Methods
// Object.defineProperty()
//Defines a new property directly on an object or modifies an existing property.

Object.defineProperty(personVeryNew, 'gender', {
    value: 'Male',
    writable: true,
    enumerable: true,
    configurable: true,
});

personVeryNew.gender = 'Female';
console.log(personVeryNew.gender); // Output: Female

// Object.freeze()
// Prevents new properties from being added, existing properties from being removed, and existing property values from being changed.

Object.freeze(personVeryNew);
personVeryNew.gender = 'Unknown'; // This will not change the gender property
console.log(personVeryNew.gender); // Output: Female

// Object.seal()
// Seals an object, preventing new properties from being added and marking all existing properties as non-configurable.

Object.seal(personVeryNew);
personVeryNew.gender = 'Unknown'; // This will not change the gender property
delete personVeryNew.name; // This will not delete the name property
console.log(personVeryNew.gender); // Output: Female
console.log(personVeryNew.name); // Output: John Doe

// Object.preventExtensions()
// Prevents new properties from being added to an object.

Object.preventExtensions(personVeryNew);
personVeryNew.hobby = 'Reading'; // This will not add the hobby property
console.log(Object.getOwnPropertyNames(personVeryNew)); // Output: ["name", "age", "gender"]

// *Object Prototype Methods
// Object.prototype
// The prototype of all objects in JavaScript. It contains properties and methods that all objects inherit.

console.log(Object.prototype); // Output: Object {}

// Object.prototype.constructor
// Returns a reference to the function that created the object.

console.log(personPrototypeNew.constructor); // Output: function Object() { [native code] }

// Object.prototype.hasOwnProperty()
// Returns a boolean indicating whether the object has the specified property as its own property.

console.log(personPrototypeNew.hasOwnProperty('name')); // Output: true
console.log(personPrototypeNew.hasOwnProperty('eat')); // Output: false

// Object.prototype.isPrototypeOf()
// Tests if an object or its prototype chain has the specified prototype object.

console.log(Object.prototype.isPrototypeOf(personPrototypeNew)); // Output: true
console.log(personNew.isPrototypeOf(personPrototypeNew)); // Output: false

// Object.prototype.propertyIsEnumerable()
// Returns a boolean indicating whether the specified property is enumerable.

console.log(Object.prototype.propertyIsEnumerable('name')); // Output: true
console.log(Object.prototype.propertyIsEnumerable('toString')); // Output: false

// Object.prototype.toString()
// Returns a string representation of the object.

console.log(Object.prototype.toString.call(personPrototypeNew)); // Output: [object Object]

// Object.prototype.valueOf()
// Returns the primitive value of the specified object.

console.log(Object.prototype.valueOf.call(personPrototypeNew)); // Output: {}

// *Function Methods
// Function.prototype.apply()
// Calls a function with a given this value and arguments provided as an array.

let multiply = function (a, b) {
    return a * b;
};

console.log(multiply.apply(null, [2, 3])); // Output: 6

// Function.prototype.call()
// Calls a function with a given this value and arguments provided individually.

console.log(multiply.call(null, 2, 3)); // Output: 6
