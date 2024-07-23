// Evaluate these(ie True or False)

console.log([2] === [2]); // This condition will always return 'false' since JavaScript compares objects by reference, not value.ts(2839)
console.log({} === {}); // This condition will always return 'false' since JavaScript compares objects by reference, not value.ts(2839)


// What is, for each object below, the value of the property number and why ?

const object1 = { number: 5 }; // Define object1 and assign { number: 5 }
const object2 = object1; // Define object2 to reference object1 in memory thus { number: 5 }
const object3 = object2; // Define object3 to reference object2 in memory (which reference object1 in memory) thus { number: 5 }
const object4 = { number: 5 }; // Define object4 and assign { number: 5 }

object1.number = 4; // Access object1.number property and change value to { number: 4 } thus changing values of number property of both object2 and object3 which are referencing object1 in memory
console.log(object2.number) // Output: 4
console.log(object3.number) // Output: 4
console.log(object4.number) // Output: 5, because object4 is not related to objects 1,2,3


// Create a class Animal with the attributes name, type and color.The type is the animal type, for example: dog, cat, dolphin etc …
class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

// Create a class Mammal that extends from the Animal class. Inside the class, add a method called sound().This method takes a parameter: the sound the animal makes, and returns the details of the animal(name, type and color) as well as the sound it makes.
class Mammal extends Animal {
    constructor(name, type, color, sound) {
        super(name, type, color);
        this.sound = sound;
    }
    makeSound() {
        console.log(`Animal ${this.name} of type ${this.type} colored in ${this.color} makes the sound like "${this.sound}"`);
    }
}

// Create a farmerCow object that is an instance of the class Mammal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
const farmerCow = new Mammal("Berta", "cow", "brown and white", "Moooo!")

// For example: Moooo I'm a cow, named Lily and I'm brown and white
farmerCow.makeSound();