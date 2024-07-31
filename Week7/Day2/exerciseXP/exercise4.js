// Exercise 4: Analyze
// Instructions
// Analyse the code provided below - what will be the outcome ?

function resolveAfter2Seconds() { // initialize a function with promise that will be resolved with a 2 sec delay
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() { // async function that logs "calling", waits for the promise from resolveAfter2Seconds to be resolved and logs the result
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall(); // Output: "calling" and after 2 sec: "resolved"