// Exercise 6: Intersection Types and Type Guards
// What You Will Learn
// Combine types using intersection types.
// Use type guards to handle complex types safely.
// Task
// Define a type Employee that combines Person and Job using intersection types. Create a function describeEmployee that takes an Employee object and uses type guards to return a description based on whether the Job is a Manager or a Developer.

// Person type: name: string; age: number;
// Job type: position: string; department: string;
// Employee type should combine these.
// describeEmployee should return a specific message for each type of job.

// Define the Person type
type Person = {
    name: string;
    age: number;
};

// Define the Job type
type Job = {
    position: string;
    department: string;
};

// Define the intersection type Employee
type Employee = Person & Job;

// Create the function describeEmployee
function describeEmployee(employee: Employee): string {
    if (employee.position === 'Manager') {
        return `${employee.name} is a Manager in the ${employee.department} department.`;
    } else if (employee.position === 'Developer') {
        return `${employee.name} is a Developer in the ${employee.department} department.`;
    } else {
        return `${employee.name} works in the ${employee.department} department as a ${employee.position}.`;
    }
}

// Test the function with different Employee objects
const manager: Employee = { name: 'Alice', age: 35, position: 'Manager', department: 'HR' };
const developer: Employee = { name: 'Bob', age: 28, position: 'Developer', department: 'IT' };
const janitor: Employee = { name: 'Charlie', age: 67, position: 'Janitor', department: 'Janitor' };

console.log(describeEmployee(manager)); // Output: Alice is a Manager in the HR department.
console.log(describeEmployee(developer)); // Output: Bob is a Developer in the IT department.
console.log(describeEmployee(janitor)); // Output: Charlie works in the Janitor department as a Janitor.
