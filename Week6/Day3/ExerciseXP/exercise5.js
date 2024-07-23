// Instructions
// Using the Dog class below:

class Dog {
    constructor(name) {
        this.name = name;
    }
};

// Analyze the options below.Which constructor will successfully extend the Dog class?
// 1
// class Labrador extends Dog {
//     constructor(name, size) {
//         this.size = size; // missing super(name)
//     }
// };


// 2 
// * Correct constructor
class Labrador extends Dog {
    constructor(name, size) {
        super(name); // Call the parent class constructor. Without super, the Labrador object wouldn't have a properly set name.
        this.size = size; // Definition of new property: size, specific to Labrador objects.
    }
};


// 3
// class Labrador extends Dog {
//     constructor(size) { // missing argument name in constructor
//         super(name);
//         this.size = size;
//     }
// };


// 4
// class Labrador extends Dog {
//     constructor(name, size) {
//         this.name = name; // missing super(name)
//         this.size = size;
//     }
// };
