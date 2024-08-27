// Exercise 1 : Find The Numbers Divisible By 23
// Instructions
// Create a function call displayNumbersDivisible() that takes no parameter.
// In the function, loop through numbers 0 to 500.
// Console.log all the numbers divisible by 23.
// At the end, console.log the sum of all numbers that are divisible by 23.
// Outcome: 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345
// 368 391 414 437 460 483
// Sum: 5313

// Bonus: Add a parameter divisor to the function.
// displayNumbersDivisible(divisor)

// Example:
// displayNumbersDivisible(3) : Console.log all the numbers divisible by 3,
//     and their sum
// displayNumbersDivisible(45) : Console.log all the numbers divisible by 45,
//     and their sum


function displayNumbersDivisible(divisor) {
    let numbers = ""
    let sum = 0;
    for (let i = 0; i <= 500; i++) {
        if (i % divisor === 0) {
            numbers += i + " " // create a line of numbers separated by white space
            sum += i; // add divisible numbers in a variable
        }
    }
    numbers = numbers.trim(); // remove trailing space (one in the end)
    return `Numbers divisible by ${divisor}: ${numbers}\nSum: ${sum}`;
}

console.log(displayNumbersDivisible(23))
console.log(displayNumbersDivisible(3))
console.log(displayNumbersDivisible(45))