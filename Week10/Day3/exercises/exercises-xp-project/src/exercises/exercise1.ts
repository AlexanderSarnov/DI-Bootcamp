// Exercise 1: Intersection Types
// What You Will Learn:
// Combine multiple types into one.
// Create a type that includes all properties from several types.
// Task
// Define an intersection type PersonWithAddress that combines Person and Address types. Create a variable of this type with properties from both types.
// The Person type should contain name and age, the Address type should contain street and city

// Define the Person type
type Person = {
    name: string;
    age: number;
};

// Define the Address type
type Address = {
    street: string;
    city: string;
};

// Define the intersection type PersonWithAddress
type PersonWithAddress = Person & Address;

// Create a variable of PersonWithAddress type
const personWithAddress: PersonWithAddress = {
    name: 'John',
    age: 23,
    street: 'Bialik',
    city: 'Tel-Aviv',
};

console.log(personWithAddress);
