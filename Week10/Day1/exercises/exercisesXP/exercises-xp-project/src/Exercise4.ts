// Exercise 4: Control Flow with if...else

// Instructions
// Write a function that takes a number as input and returns a string indicating whether the number is positive, negative, or zero.
// Use if...else statements to control the flow of a program.

const checkNumberSign = (number: number) => {
    if (number > 0) {
        return `Number ${number} is positive`;
    } else if (number < 0) {
        return `Number ${number} is negative`;
    } else {
        return `Number ${number} is zero`;
    }
};

// test function
console.log(checkNumberSign(1));
console.log(checkNumberSign(-1));
console.log(checkNumberSign(0));
