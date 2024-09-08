// recursion

// What is recursion:
// Function that calls itself during a runtime.
// Base case - the way to exit recursion. Shall be defined before recursive case
// Initial state - the very first run of function
// (for which we create a special boolean argument that will True by default
// and will turn false after initial state run completed)
// Initial state allows to generate additional output that would not be required during the rest of the cases
// Recursive case is the last case of the recursion before the exit conditon of Base case is reached
// Main Return of the function is the body of recursion where values after the initial state and until the recursive state are executed
// !There are misconceptions according to the GPT especially in handling initial case


// Simple recursion example: countdown

function countdown (iterableNumber, isInitialState = true) {
  // Define base case (i.e. exit condition)
  if (iterableNumber < 0){
    return '\nCountdown complete';
}
  // Define Initial State operation
  if (isInitialState === true){
    return `\nStarting Countdown: ${iterableNumber}, ` + countdown(iterableNumber - 1, false);
}
  // Define Recursive State (last iteration of recursion)
  if (iterableNumber === 0 ) {
    return `0: ` + countdown(iterableNumber -1, false);
}
  return iterableNumber + ', ' + countdown(iterableNumber - 1, false);
}

console.log(countdown(10));


// Rewrite recursion using ternary operators
function countdownTernary (itrNum, isInitState = true) {
  return `\nCountdown Complete.`
  ? itrNum < 0
  : `\nStarting Countdown: \n${itrNum}, ` + countdownTernary(itrNum - 1, false)
  ? isInitState === true
  : `0: ` + countdownTernary(itrNum - 1, false)
  ? itrNum === 0
  : `${itrNum}, ` + countdownTernary(itrNum - 1, false);
}
