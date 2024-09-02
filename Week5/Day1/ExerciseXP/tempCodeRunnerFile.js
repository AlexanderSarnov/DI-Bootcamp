const a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree() // **Alert with value a = 0
funcTwo() // **Assign a = 5
funcThree() // **Alert with value a = 5
// #2.2 What will happen if the variable is declared
// with const instead of let ?
// **Will return 0, and after an error message: "TypeError: Assignment to constant vatiable."