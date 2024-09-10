// Async and Await example

async function x() {
    return 10;
}

const y = async () => {
    return 6;
};

// console.log(x(), y()); // Promise{ 10 }, Promise{ 6 }

// function getXY() {
//     x().then((value) => {
//         console.log(value);
//         y().then((value) => console.log(value));
//     });
// }

// getXY(); // 10, 6 - resolved both promises

// async function getXY() {
//     let x1 = await x();
//     let y1 = await y();
//     console.log(x1, y1); // 10, 6 - resolved both promises
// }

// getXY(); // 10, 6 - resolved both promises in the correct order

// How to reject a promise in async function

async function z() {
    throw new Error('Something went wrong');
}

// z().catch((error) => console.log(error)); // Error: Something went wrong

// !Note: error is thrown before getXY result is displayed in console.

async function getXYZ() {
    try {
        let x1 = await x();
        let y1 = await y();
        let z1 = await z(); // this will throw an error
        console.log(x1, y1, z1); // never reaches here
    } catch (error) {
        console.log(error); // Error: Something went wrong
    }
}

getXYZ(); // Error: Something went wrong - error is caught in the catch block

// Throwing error in async function is like rejecting a promise.