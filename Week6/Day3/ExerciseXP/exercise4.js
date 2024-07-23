// Instructions
// Analyze the code below.What will be the output ?
class Person { // class definition
    constructor(name) { // Constructor method gets called whenever a new instance of the class is created
        this.name = name; // Name argument assigned to the this.name property of the newly created object
    }
}

const member = new Person('John'); // Create new instance of the Person class, allocate memory for a new object, set prototype to the Person.prototype and execute constructor function to initialize the object's properties
console.log(typeof member); // Output: object