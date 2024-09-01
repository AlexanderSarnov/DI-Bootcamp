// !FOR Loop

// *Basic implementation
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
// // Output: 0 \n, 1 \n, 2 ... 4

// *Nested loops
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         console.log(`i: ${i}, j: ${j}`);
//     }
// }

// *Multiconditional for Loop
// Using logical operators inside condition. No limits for the number of variables and increments involved
// for (let i = 0, j = 10; i <= 10 && j >= 0; i++, j--) {
//     console.log(`i: ${i}, j: ${j}`);
// }

for (let i = 0, j = 5; i <= 15 && j >= 0; i += j, j--) {
    console.log(`i: ${i}, j: ${j}`);
}

// !Alternative Techniques

// *Using forEach
// const array = [1, 2, 3, 4, 5];
// array.forEach((element) => {
//     console.log(element);
// });

// *Using map
const array = [1, 2, 3, 4, 5];
const squaredArray = array.map((element) => element * 2);
console.log(squaredArray); // not actually squared?

// *Using while Loop
// The while loop is an alternative when the number of iterations is not known beforehand.
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
