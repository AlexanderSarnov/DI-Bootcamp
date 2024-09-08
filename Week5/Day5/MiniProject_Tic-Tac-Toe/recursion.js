// Write a simple recursive function to practice the concept of recursion.

function countdown(number) {
    // define the base case
    if (number < 0) {
        return 'Countdown complete!';
    }
    return number + ', ' + countdown(number - 1);
}

console.log(countdown(3));

// A more interesting example with additional parameter to handle the initial state of the function and thus have a single 'Countdown: ' word in the beginning of the output that will nor repeat with every iteration.

function countdownWithInitialState(number, isInitialState = true) {
    // Define the base case
    if (number < 0) {
        return '\nCountdown complete!';
    }
    if (isInitialState) {
        return `\nCountdown: ${number}, ` + countdownWithInitialState(number - 1, false);
    }
    return `${number}, ` + countdownWithInitialState(number - 1, false);
}

console.log(countdownWithInitialState(3));

// The final example is of the function with Base Case, Initial State and a Recursive Case

function countdownExample(iterableNumber, isInitialState = true) {
    // Define the Base Case to exit the recursion with the "exit message"
    if (iterableNumber < 0) {
        return '\nCountdown complete!';
    }
    // Define the Initial State to segregate initial output from the rest outputs:
    if (isInitialState) {
        return `\nCountdown: ${iterableNumber}, ` + countdownExample(iterableNumber - 1, false);
    }
    // Define the Recursive Case to continue the recursion with the decrtementing value
    if (iterableNumber === 0) {
        return `0, ` + countdownExample(iterableNumber - 1, false);
        // If the iterableNumber is not 0, then it will continue the recursion with the decrementing value
    }
    return iterableNumber + ', ' + countdownExample(iterableNumber - 1, false);
}

console.log(countdownExample(3));

// The following example is to demonstrate the use of ternary operator instead of if confitions.

function countdownTernary(iterableNumber, isInitialState = true) {
    return iterableNumber < 0 // base case
        ? '\nCountdown complete!'
        : isInitialState // initial state
        ? `\nCountdown: ${iterableNumber}, ` + countdownTernary(iterableNumber - 1, false)
        : iterableNumber === 0 // recursive iteration
        ? `0, ` + countdownTernary(iterableNumber - 1, false)
        : iterableNumber + ', ' + countdownTernary(iterableNumber - 1, false); // recursive case with ternary operator, end
}

console.log(countdownTernary(3));

// Rewrite the first example using the learned ideas and ternary operator.
function countdown2(itrNum, isInit = true) {
    return itrNum < 0
        ? '\nCountdown complete!'
        : isInit
        ? `\nCountdown: ${itrNum}, ` + countdown2(itrNum - 1, false)
        : itrNum === 0
        ? `0, ` + countdown2(itrNum - 1, false)
        : itrNum + ', ' + countdown2(itrNum - 1, false);
}

console.log(countdown2(3)); // test the function
