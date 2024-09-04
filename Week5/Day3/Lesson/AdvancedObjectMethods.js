// *Object Destructuring - Daily Digest

// var employee = {
//     // Object we want to destructure
//     firstname: 'Jon',
//     lastname: 'Snow',
//     dateofbirth: '1990',
// };

// // Destructuring the object into our variables
// var { firstname, lastname, dateofbirth } = employee;
// console.log(firstname, lastname, dateofbirth);

// The following code destructures the object into variables with a different name than the object property:
// var employee = {
//     // Object we want to destructure
//     firstname: 'Jon',
//     lastname: 'Snow',
//     dateofbirth: '1990',
// };

// // Destructuring the object into variables with
// // different names than the object variables
// var { firstname: fn, lastname: ln, dateofbirth: dob } = employee;
// console.log(fn, ln, dob);

// We can also assign default values to variables whose keys may not exist in the object we want to destructure. This will prevent our variable from having an undefined value being assigned to it. The code below demonstrates this:

// var employee = {
//     // Object we want to destructure
//     firstname: 'Jon',
//     lastname: 'Snow',
//     dateofbirth: '1990',
// };

// // Destructuring the object into variables without
// // assigning default values
// var { firstname, lastname, country } = employee;
// console.log('Without setting default values');
// console.log(firstname, lastname, country);

// // Destructuring the object into variables by
// // assigning default values
// var { firstname = 'default firstname', lastname = 'default lastname', country = 'default country' } = employee;
// console.log('\n After setting default values');
// console.log(firstname, lastname, country);

// *Objects in JS are dynamic and can hold different types of data. They are unordered collections of key-value pairs
// everything in JS is an object, arrays, functions, and even other objects.
// arrays are key-value pairs where the keys are numeric (0-based) or string based and the values can be of any type.

let obj = {}; // obj declaration
let obj1 = new Object(); // obj creation

// insert into the object
obj.property1 = 'value1';
obj['property2'] = 'value2';

// get value of a key from the object
console.log(obj.property1);
console.log(obj['property1']);

// Iterate through the object
for (let key in obj) {
    console.log(key, obj[key]); // *all value access methods are also valid
}

// object.keys() returns an array of keys
let keys = Object.keys(obj);
console.log(keys);

keys.forEach((key) => {
    // iterate over keys
    console.log(key, obj[key]);
});

// object.values() returns an array of values
let values = Object.values(obj);
console.log(values);

values.forEach((value) => {
    // iterate over values
    console.log(value);
});

let smileAdd = values.map((value) => {
    return value + ':)';
});

console.log(smileAdd); // output: ['value1:)', 'value2:)']

// Object.entries() returns an array of key-value pairs (as another array)
let entries = Object.entries(obj);
console.log(entries);

Object.entries(obj).forEach(([key, value] /**this is destructuring of an array */) => {
    console.log('element:', key, value);
});

// Object.fromEntries() creates a new object from an array of key-value pairs (only works on a first level array)
let arr = [
    ['property1', 'value1'],
    ['property2', 'value2'],
];

let newObj = Object.fromEntries(arr);

console.log(newObj); // output: { property1: 'value1', property2: 'value2' }

// *Object.freeze() prevents adding, deleting or modifying properties of an object.

// Object methods:
let student = {
    name: 'John Doe',
    age: 25,
    address: {
        city: 'New York',
    },
    greet() {
        // method (a function inside an object, cannot be called directly, cannot be cloned without using deep cloning)
        console.log('Hello, my name is ' + this.name /**this will not be able to retrieve the object name (student) */);
    },
    x: () => {
        console.log(this); // refers to the Window.
    },
    hello: function () {
        console.log(this.name);
        const hello2 = () => {
            console.log(this.name);
        };
        hello2();
    },
};

console.log(student);

// execute the method of the object
student.greet(); // output: Hello, my name is John Doe

console.log(this); // gets the window object of the browser (and shows Window name as an object name)

// Object and array are by reference
// Object cloning (Shallow copy)
let studentInstance = student; // studentCopy and student are pointing to the same object in the memory
console.log(studentInstance === student); // output: true

let studentClone = { ...student }; // create a new object with the same properties as student using spread operator
console.log(studentClone === student); // output: false

studentClone.address = { ...student.address }; // clone the nested object to allocate a new memory location for the nested object
studentClone.address.city = 'Tel-Aviv'; // change the nested object property
console.log(student.address.city); // output: Tel-Aviv

studentClone.greet = student.greet; // clone the nested object method to allocate a new memory location for the nested object method (this is similar to a deep cloning custom cloning fucntion)

// *deep cloning of the object with the same properties as student using JSON.parse() and JSON.stringify() -> allows to clone all properties including nested objects and changing them will not affect the original object (but can't clone methods) -> so it is only for plain data.

let studentJSONClone = JSON.parse(JSON.stringify(student));
console.log(studentJSONClone === student); // output: false

// *using custom cloning function for the deep cloning of specific properties
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (obj instanceof Date) {
        return new Date(obj);
    }

    if (obj instanceof Array) {
        return obj.map(deepClone);
    }

    if (obj instanceof Object) {
        const copy = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                copy[key] = deepClone(obj[key]);
            }
        }
        return copy;
    }

    throw new Error("Unable to copy object! Its type isn't supported.");
}

const studentDeepClone = deepClone(student);

// Verify that the method is cloned
studentDeepClone.greet(); // Output: Hello, my name is John

// *using lodash library for deep cloning
const _ = require('lodash');

const studentLodashClone = _.cloneDeep(student);

// Verify that the method is cloned
studentLodashClone.greet(); // Output: Hello, my name is John

// spreading into on object
let student1 = {
    name: 'John Doe',
    age: 25,
};

let student2 = {
    ...student1,
    address: {
        city: 'New York',
    },
};

console.log(student2); // output: { name: 'John Doe', age: 25, address: { city: 'New York' } }

// destructuring an object
const { name, age, address } = student2; // destructuring into variables

console.log(name, age, address.city); // output: John Doe 25 New York

const example = ({ name, age, address }) => {
    console.log(name, age, address);
};
example(student2); // output: prop1 prop2 John Doe

// nested object destructuring
const nestedObj = {
    name: 'John Doe',
    address: {
        city: 'New York',
        country: 'USA',
        state: {
            name: 'New York State', // this will not be able to retrieve the object name (nestedObj)
        },
    },
};

const {
    address: { city, country },
} = nestedObj; // destructuring nested object

console.log(city, country); // output: New York USA - object was destructured

// !Classes
// Class is a blueprint for creating objects. Objects are created from classes. Can create multiple objects with the same class. Classes can have properties (data) and methods (functions).

class NameOfClass {
    // constructor is used to initialize properties (define data)
    // it is a function that cannot be replaced with an arrow function
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    method() {}
    static staticMethod() {}

    // getter and setter methods of a class are to be defined in order to access the properties of an object using dot notation and to be accessed when parameters are private.
    getName() {
        return this.name;
    }
    setName(newName) {
        this.name = newName;
    }
}

class Animal {
    // can access the name of a class from JS.
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    // setters and getters
    // get used to access the properties of an object using dot notation and getters and setter because normally properties are not accessible.
    getName() {
        return this.name;
    }
    setName(newName) {
        this.name = newName;
    }
    getType() {
        return this.type;
    }
    setType(newType) {
        this.type = newType;
    }
}

const myDog = new Animal('Buddy', 'Dog'); // creating an object of Animal class
const newDog = new Animal('Shadow', 'Dog');
const myCat = new Animal('Whiskers', 'Cat');

let arr1 = [myDog, newDog, myCat];

console.log(myDog.getName()); // output: Buddy
console.log(newDog.getType()); // output: Dog
console.log(myCat.getName(), myCat.getType()); // output: Whiskers Cat

console.log(arr1); // output: [Animal { name: 'Buddy', type: 'Dog' }, Animal { name: 'Shadow', type: 'Dog' }, Animal { name: 'Whiskers', type: 'Cat' }]

// *Inheritance: allows a class to inherit properties and methods from another class
class Dog extends Animal {
    // creating a new method in a subclass with same name as in the parent class will make it use a subclass method.
    constructor(name, breed, color) {
        // must be called first in the subclass
        super(name, 'Dog'); // call the constructor of the parent class (Animal) with the type "Dog" assigned to the type property by default
        this.breed = breed;
        this.color = color;
    }
    //getters and setters
    getBreed() {
        return this.breed;
    }
    setBreed(newBreed) {
        this.breed = newBreed;
    }

    getColor() {
        return this.color;
    }
    setColor(newColor) {
        this.color = newColor;
    }
}

const myNewDog = new Dog('Max', 'Labrador'); // creating an object of Dog class

myNewDog.setColor('White'); // using setter method to set the color property

console.log(myNewDog.getName(), myNewDog.getType(), myNewDog.getBreed(), myNewDog.getColor()); // output: Max Dog Labrador White

// Exercise 1:

class User {
    constructor(name) {
        this.name = name;
    }
    helloUser() {
        console.log(`Hello, ${this.name}!`);
    }
}

class Student extends User {
    constructor(name) {
        super(name);
    }
}

const arrayOfStudents = [new Student('Alice'), new Student('Bob'), new Student('Charlie'), new Student('Alice')];

arrayOfStudents.forEach((student) => student.helloUser()); // Output: Hello, Alice! Hello, Bob! Hello, Charlie!
console.log(arrayOfStudents.length, arrayOfStudents);
