// Instructions
// Analyze the code below. What will be the output?
class Person {
    // create a class Person with a constructor that takes a name as a parameter and initializes a property name
    constructor(name) {
        this.name = name;
    }
}

const member = new Person('John'); // create an instance of the Person class with the name 'John' and store it in the variable member
console.log(typeof member); // Output: object
