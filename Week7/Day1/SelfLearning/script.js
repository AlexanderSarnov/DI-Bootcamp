const posts = [
    { post_id: 1, post_title: 'First Post' },
    { post_id: 2, post_title: 'Second Post' },
    { post_id: 3, post_title: 'Third Post' },
];

const comments = [
    { post_id: 2, comment: 'Great!' },
    { post_id: 2, comment: 'Nice Post!' },
    { post_id: 3, comment: 'Awesome Post!' },
];

console.log(posts);
console.log(comments);

const getPost = (id, callback) => {
    const post = posts.find(post => post.post_id === id);
    if (post) {
        callback(null, post);
    } else {
        callback("No such post found", undefined);
    }
};

const getComments = (post_id, callback) => {
    const result = comments.filter(comment => comment.post_id === post_id);
    if (result) {
        callback(null, result);
    } else {
        callback("No comments found", undefined);
    }
}


// *JS from DI-Bootcamp

// Call Stack explanation
function thirdFunc() {
    console.log("Greetings from thirdFunc()");
}

function secondFunc() {
    thirdFunc();
    console.log("Greetings from secondFunc()");
}

function firstFunc() {
    secondFunc();
    console.log("Greetings from firstFunc()");
}

firstFunc();

// Greetings from thirdFunc()
// Greetings from secondFunc()
// Greetings from firstFunc()

// Callback function and web API's | here: setTimeout
console.log("Start of script");

setTimeout(function () { // this named a callback function, it will be executed in the background and it's result will be called after the timeout finishes
    console.log("First timeout completed");
}, 0); // with 0 will execute immediately after End of Script, yet will wait for stack to get empty before executing the asynchronous task

console.log("End of script");

// Callback hell or pyramid of doom
function getMeat(callback) {
    console.log("walking to the butcher...");
    setTimeout(() => {
        console.log("getting the beef from the butcher");
        callback("beef");
    }, 2000);
}

function getBuns(callback) {
    console.log("getting the buns from the bakery");
    callback("whole grains");
}


function putMeatBetwenBuns(bunsType, meatType, callback) {
    console.log("preparing the burger...");
    callback(`The ${meatType} burger with ${bunsType} buns is created`)
}

const makeBurger = () => {
    getMeat((meatType) => {
        getBuns((bunsType) => {
            putMeatBetwenBuns(bunsType, meatType, (finalBurger) => {
                console.log(finalBurger);
            })
        })
    })
}

const burger = makeBurger();


// Promises
function startBurger() {
    return new Promise((resolve, reject) => {
        console.log("walking to the butcher...");
        setTimeout(() => {
            console.log("getting the beef from the butcher");
            resolve("beef");
        }, 2000)
    })
}


startBurger()
    .then(meatType => {
        console.log("getting the buns from the bakery");
        return [meatType, "whole grains"];
    })
    .then(([meatType, bunsType]) => {
        console.log("preparing the burger...");
        console.log(`The ${meatType} burger with ${bunsType} buns is created`);
    })


// Promise constructor - basic explanation
let goodGrades = true; // initialize variable and set it to be true to simplify example

let endSemester = new Promise(function (resolve, reject) { // promise function executed immediately when called and again after a callback thus providing 2 different outputs when logged: pending and resolved (based on goodGrades value === true)
    setTimeout(() => { // callback wrapper for promise statuses to have a 5 sec timeout before switching from pending into resolved
        if (goodGrades) { // conditional to choose between resolve / reject statuses based on goodGames value (boolean)
            resolve("I will get a gift"); // resolve returned value
        } else {
            reject("I won't get the gift"); // reject returned value
        }
    }, 5000 // timeout in milliseconds 5000 === 5 sec  
    );
});

console.log(endSemester) // log varible containing promise to see different stances of promise outputs

// Prototypes Methods: Consuming A Promise
let goodGrades2 = 83; // initialize variable to store value of grades for further comparison

let endSemester2 = new Promise(function (resolve, reject) { // initialize promise (why is there no async???)
    if (goodGrades2 > 90) { // conditional to return different results based on goodGrades2 value
        resolve("Computer"); // resolve1 - to see how .thencan handle a conditional resolve
    } else if (goodGrades2 > 80 && goodGrades2 <= 89) {
        resolve("Phone"); // resolve2 - to see how .then can handle a conditional resolve
    } else {
        reject("I won't get the gift"); // to see how .catch can handle a reject
    }
});


endSemester2.then(function (value) {
    console.log("I got an amazing gift : A ", value);
});

endSemester2.catch(function (value) {
    console.log("Booo", value);
});

endSemester2.finally(function () { // changes promise status to fulfilled and returns a phrase disregarding if there was an error caught or not (resolved/rejected)
    console.log(`No matter if I get a gift or not, 
                I want to have good grades`);
});

console.log(endSemester2) // logs .then or .catch based on comparison and .finally disregarding result

// Chaining promises (utilizing arrow functions):
let bankAmount = 1000 // initialize bank amount value
let expense = 500 // initialize expensee value

let bankPromise = new Promise((resolve, reject) => { // start promise that is supposed to return resolve or reject based on the comparison result
    if (expense < bankAmount) { // initialize comparison of variables and return one of two results
        resolve(expense);
    } else {
        reject("Rejected by the Bank");
    }
});

//1st "then"
bankPromise.then((result) => {
    //result is the argument passed in the resolve function
    console.log(`The expense is ${result} dollars`);
    return result * 1.17; // calculate taxes of the expense in case that bank will approve the initial expense
    //2nd "then"
}).then((resultTwo) => {
    //resultTwo is the expense including taxes
    console.log(`The expense included taxes is ${resultTwo} dollars`);
    bankAmount -= resultTwo;
    console.log(`I have ${bankAmount} dollars left in the bank`);
    return bankAmount;
}).catch((error) => {
    console.log(`We have a problem : ${error}`)
}); // the overall logic here is wrong because bank shall calculate taxes plus expense before approving transaction in order to keep debit account above zero