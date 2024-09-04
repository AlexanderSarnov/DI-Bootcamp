// Exercise 5 : Dog class
// Instructions
// Using the Dog class below:

class Dog {
    constructor(name) {
        this.name = name;
    }
}
// Analyze the options below. Which constructor will successfully extend the Dog class?

// 1 - Failure. super() is missing in the constructor.
//     constructor(name, size) {
//         this.name = name;
//         this.size = size;
//     }
// }

// 2 - Successfully extends the Dog class.
class Labrador extends Dog {
    constructor(name, size) {
        super(name);
        this.size = size;
    }
}

// Create an instance of Labrador
const lab = new Labrador('Buddy', 'Large');

// Check if the instance has inherited properties and methods
console.log(lab.name); // Output: Buddy
console.log(lab.size); // Output: Large

// Verify inheritance using instanceof
console.log(lab instanceof Labrador); // Output: true
console.log(lab instanceof Dog); // Output: true

// 3 - Failure. Name is not defined in the constructor.
// class Labrador extends Dog {
//     constructor(size) {
//         super(name);
//         this.size = size;
//     }
// }

// 4 - Failure. super() is missing in the constructor.
// class Labrador extends Dog {
//     constructor(name, size) {
//         this.name = name;
//         this.size = size;
//     }
// }
