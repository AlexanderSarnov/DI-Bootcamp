// Analyse the code below, and predict what will be the value of a in all the following functions. //
// Write your prediction as comments in a js file.Explain your predictions. //

// // #1
// function funcOne() {
//     const a = 5;
//     if (a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// // #1.1 - run in the console:
// funcOne()
// // #1.2 What will happen if the variable is declared
// // ** There will be an alert pop-up with text "inside the funcOne function 3", because when a = 5 it implies that a > 1, thus assigning a = 3.
// // with const instead of let ?
// // ** It will return an error message: "TypeError: Assignment to constant vatiable."

// //#2
// const a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree() // **Alert with value a = 0
// funcTwo() // **Assign a = 5
// funcThree() // **Alert with value a = 5
// // #2.2 What will happen if the variable is declared
// // with const instead of let ?
// // **Will return 0, and after an error message: "TypeError: Assignment to constant vatiable."


// //#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour() // **Assigns value "hello" to a global variable "a" of a window object
// funcFive() // **Display alert with value "hello" in place of variable ${a}.

// //#4
// const a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// // #4.1 - run in the console:
// funcSix() // **Display alert with value "test" of variable "a"
// // #4.2 What will happen if the variable is declared
// // with const instead of let ?
// // **no change in the output since "let a = 'test'" is in the block scope while "const a = 1" is in the global scope.

// //#5
// const a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// // #5.1 - run the code in the console
// // #5.2 What will happen if the variable is declared
// // with const instead of let ?
// // **no change in the output since "let a = 5" is declared wthin the block scope while "const a = 2" is declared within the global scope.