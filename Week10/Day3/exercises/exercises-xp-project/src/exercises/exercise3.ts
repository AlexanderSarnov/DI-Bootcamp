// Exercise 3: Type Casting
// What You Will Learn
// Convert a variable from one type to another using type casting.
// Understand the difference between type casting and type assertions.
// Task
// Create a variable someValue of type any and cast it to a string. Then, use it as a string.

let someValue: any = 12345; // Initially a number

// Scenario without proper type casting - This will cause an error
try {
    console.log('Without type casting:');
    console.log((someValue as any).toUpperCase()); // Error: .toUpperCase() is not a function
} catch (error) {
    if (error instanceof Error) {
        console.error('Error without type casting:', error.message);
    } else {
        console.error('Caught unexpected error:', error);
    }
}

// Scenario with proper type casting - This will work fine
try {
    console.log('With proper type casting:');
    let stringValue = someValue.toString() as string;
    console.log(stringValue.toUpperCase()); // Works fine
} catch (error) {
    if (error instanceof Error) {
        console.error('Error with proper type casting:', error.message);
    } else {
        console.error('Caught unexpected error:', error);
    }
}

//*The key takeaway is that type assertions tell TypeScript what the type should be, without actually altering the underlying data.
// Thus we can't use type casting in ts, since it is type assertions. While in C and Java there are actualy possible type castings when data is changed.
