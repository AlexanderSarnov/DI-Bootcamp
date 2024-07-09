// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops(Nested means one inside the other - check out this tutorial of nested loops).
// Do this Daily Challenge by yourself, without looking at the answers on the internet.
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *

// Case1 - using repeat method of a string
for (let i = 1; i <= 6; i++) {
    // Create a line of asterisks using string repetition
    const asterisksLine = "*".repeat(i);
    console.log(asterisksLine)
}

// Case2 - using nested loop (unefficient in terms of number of iterations)
for (let i = 0; i <= 5; i++) {
    let asterisksLine = "" // Initialize an empty string for each row
    for (let j = 0; j <= i; j++) { // Inner loop to add stars for each row
        asterisksLine += "*" // Add an asterisk to the current line

    }
    console.log(asterisksLine);
}