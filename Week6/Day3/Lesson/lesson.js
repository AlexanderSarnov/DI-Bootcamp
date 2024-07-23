// !Reduce number with recursion
function reduceNumber(number) {
    // Base case (single-digit number)
    if (number < 10) { // !Exit condition for recursion
        return number;
    }

    const sum = String(number) // Implicit string conversion
        .split("") // Split into digits
        .reduce((acc, digit) => acc + parseInt(digit), 0); // Sum digits

    console.log(`${number} -> ${sum}`); // Display intermediate result

    return reduceNumber(sum);
}

// Example usage
const result1 = reduceNumber(16); // Output: 16 -> 7, 7
const result2 = reduceNumber(942); // Output: 942 -> 15, 15 -> 6, 6

console.log(result1);
console.log(result2);

// **Object Destructuring in JS

// !Assigning to existing variable names
var employee = {    // Object we want to destructure
    firstname: 'Jon',
    lastname: 'Snow',
    dateofbirth: '1990'
};

// Destructuring the object into our variables
var { firstname, lastname, dateofbirth } = employee;
console.log(firstname, lastname, dateofbirth);

// Display original object
console.log(employee)

// !Assigning to a new variable names
var employee = {    // Object we want to destructure
    firstname: 'Jon',
    lastname: 'Snow',
    dateofbirth: '1990'
};

// Destructuring the object into variables with
// different names than the object variables
var { firstname: fn, lastname: ln, dateofbirth: dob } = employee;
console.log(fn, ln, dob);

// !Assigning to a variable with default values
var employee = {    // Object we want to destructure
    firstname: 'Jon',
    lastname: 'Snow',
    dateofbirth: '1990'
};

// Destructuring the object into variables without 
// assigning default values 
var { firstname, lastname, country } = employee;
console.log("Without setting default values")
console.log(firstname, lastname, country);

// Destructuring the object into variables by 
// assigning default values 
var { firstname = 'default firstname',
    lastname = 'default lastname',
    country = 'default country' } = employee;
console.log("\n After setting default values")
console.log(firstname, lastname, country);


// !Exercise before the break
//  * Create a User class
//  * Store the name of the user in a "name" variable
//  * Add hello method that will log 'Hello' and the name of the user
class User {
    constructor(name) {
        this.name = name;
    }

    hello() {
        console.log(`Hello, ${this.name}!`);
    }
}
//  * Create a Student class that exextends User
class Student extends User {
    constructor(name) {
        super(name); // Call the parent class constructor
    }
}
//  * Create 3 instances of Student class, add them to an Array
const student1 = new Student("Alice");
const student2 = new Student("Bob");
const student3 = new Student("Charlie");

const students = [student1, student2, student3];
//  * Loop the array and call hello method
students.forEach(student => student.hello())