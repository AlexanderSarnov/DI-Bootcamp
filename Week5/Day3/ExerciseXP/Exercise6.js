// Exercise 6 : Challenges
// Evaluate these (ie True or False)

// [2] === [2] False. Two arrays are not the same object.
// {} === {} False. Two objects are not the same object.

// What is, for each object below, the value of the property number and why?

const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5 };

object1.number = 4;
console.log(object2.number); // Output: 4
console.log(object3.number); // Output: 4
console.log(object4.number); // Output: 5

// Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin etc …
class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

// Create a class Mammal that extends from the Animal class. Inside the class, add a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.
class Mammal extends Animal {
    constructor(name, type, color, sound) {
        super(name, type, color);
        this.sound = sound;
    }
    makeSound() {
        return `${this.sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
    }
}
// Create a farmerCow object that is an instance of the class Mammal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white
const farmerCow = new Mammal('Lily', 'cow', 'brown and white', 'Moooo');
console.log(farmerCow.makeSound()); // Output: Lily is a cow and is brown and white. It's sound is Moooo
