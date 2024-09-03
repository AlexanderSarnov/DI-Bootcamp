/**
* *function - review.
primitive type: function
by reference and by value: function is a reference type, meaning it is passed by value. This means that if you want to access a function that returns a reference. For example, if you have a function that returns an array, you can't modify the array inside the function. If you want to modify the array, you have to pass the array as a parameter and modify it.

 */

const hi = sayHello(); // initialization must be in the beginning of the code block, it would not be hoisted.

console.log(hi); // hoisted function from the global scope (all the functions are hoisted if declared with function are hoisted which means they are moved to the top of the scope before executing the code)

function sayHello() {
    // no number in the beginning of the function name. function name should be a valid identifier.
    // console.log('hello'); - avoid direct action from a function. Only use for debugging purposes and/or study.
    return 'hello';
}

console.log(hi);

// since es6 we have function expressions.
// console.log(sayHi); // cannot call a function before it is declared.

const sayHi = function () {
    return 'hi';
};

console.log(sayHi()); // logging function expression by its variable name.

// arrow function declaration with default arguments.
const sum = (a = 3, b = 5) => {
    return a + b;
};

console.log('sum of default arguments (3,5): ', sum()); // calling arrow function with default arguments.

// *Array Methods: forEach, map, filter, reduce, some, every and find.
// declare and array of users.
let users = ['John', 'Alice', 'Bob'];

// loops //
const len = users.length; // declaring a variable for length of the array. Saves us from accessing the length property repeatedly.
// for loops //

for (let i = 0; i < len; i++) {
    // loop over users and log each user at index i.
    console.log(users[i]);
}

for (let i = len - 1; i >= 0; i--) {
    // for large arrays, reverse iteration is more efficient.
    console.log(users[i]);
}

// !The only loop that can iterate over an object (not an array) is for...in loop. //
let obj = { name: 'John', age: 30 }; // declare and object.

// obj.name - dot notation to access object properties. The main purpose of dot notation is to access properties of an object.
// obj['name'] - bracket notation to access object properties. The main purpose of bracket notation is to access properties of an object.

for (const i in obj) {
    // iterating over array indices using for...in loop. The main purpose of for...in loop is to iterate over enumerable properties of an object.
    console.log(i, obj[i]);
}

// for ... of loop //
for (const user of users) {
    // loop over users using for...of loop. The main purpose of for...of loop is to iterate over iterable objects (like arrays, strings, etc.).
    console.log(user);
}

// *while loops //
let index = 0; // declare and initialize index variable for working with while loops.

while (index < len) {
    console.log(users[index]);
    index++;
}

do {
    // do-while loop is used when you want to execute the loop at least once.
    console.log(users[index]);
    index++; // this will be executed at least once. and also will be an exit condition. Without this, the loop would run indefinitely.
} while (index < len);

// Exercise1:
// create an array of user's emails from an array of user names //

let userS = ['John', 'Marry', 'Dan', 'Anne'];

let arr = [];
for (const user in userS) {
    arr.push(userS[user] + '@gmail.com');
}

console.log(arr);

// *forEach //
// With a callback function
users.forEach((user) => {
    console.log(user);
});

users.forEach(function (user) {
    // adding user names to the array of emails using a function expression and a callback function with a arr.push method. Thus achieving same result as in the exercise above.
    console.log(user);
    arr.push(user + '@gmail.com');
});

console.log(arr); // we added the names from users to our array of emails.

// parameters of forEach function:
// @param: user - is mandatory, other parameters are optional.

users.forEach(function (user, index, array) {
    console.log(user, index, array);
    array[index] = user + '_modified'; // modifying the array elements in forEach loop.
    // The forEach function doesn't return a new array, it modifies the original array.
});
console.log(users); // user names have been modified in the original array. It will work even if the original array was a const variable upon declaration.

// *some method
// some methods return a boolean value:
// @returns: true if at least one element in the array passes the test implemented by the provided function.

console.log(users.some((user) => user.startsWith('J'))); // checks if any user name starts with 'J'.

// *every method
// every method returns a boolean value:
// @returns: true if all elements in the array passes the test

console.log(users.every((user) => user.length > 3)); // checks if all user names are longer than 3 characters.

// Exercise2:
// create a function that get an arry of numbers as input
// and return a new array with all numbers multiplied by 2
const arrayOfNumbers = [1, 2, 3, 4, 5];

let newArrayOfNumbers = arrayOfNumbers.map((number) => number * 2); // using map

console.log(newArrayOfNumbers);

function multiplyByTwo(arr) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        arr2.push(arr[i] * 2);
    }
    return arr2;
}

console.log(multiplyByTwo(arrayOfNumbers)); // using a function

// Algorythm for solving this problem:
// 1. Create a new array to store the result.
// 2. Iterate over each element in the input array.
// 3. Multiply each element by 2.
// 4. Add the result to the new array.
// 5. Return the new array.
// The time complexity of both the map method and the for loop solution is (O(n)), where (n) is the length of the input array.
// Looping backwards does not decrease the time complexity. The time complexity remains (O(n)) for iterating over an array, regardless of the direction of the loop.
// Looping backwards is not more efficient in terms of time complexity, but it can be beneficial in specific scenarios such as memory access patterns, modifying the array, and certain algorithms. The choice of loop direction should be based on the specific requirements and constraints of the problem you are solving.

// *map method

// The map() method creates a new array with the results of calling a provided function on every element in the calling array.

let numbers = [1, 4, 9];
let roots = numbers.map(Math.sqrt); // map method is used to create a new array with the results of calling a provided function on every element in the calling array.

console.log(roots); // [1, 2, 3]

// The result of map will be a clone (copy) of the original array, stored in a new array.

let arrNumbers = [1, 2, 3, 4, 5];
let resultMultiplyByTwo = arrNumbers.map((number, index, array) => {
    if (index > 2) {
        return number * 2;
    }
    return number;
});
console.log(resultMultiplyByTwo); // Output: [1, 2, 3, 8, 10]

// Exercise3:
let usersA = [
    { id: 1, name: 'John', email: 'jjj@gmail.com' },
    { id: 2, name: 'Marry', email: 'mmm@gmail.com' },
    { id: 3, name: 'Anne', email: 'aaa@gmail.com' },
    { id: 3, name: 'Or', email: 'aaa@gmail.com' },
];

// usersA.map((user) => {
//     const newDiv = document.createElement('div');
//     newDiv.textContent = `${user.name} - ${user.email}`;
//     newDiv.setAttribute('id', `user-${user.id}`);
//     newDiv.style.color = 'black';
//     document.body.appendChild(newDiv);
// }); // solution that was injected into HTML document directly

// *Using map with template literals (simple way to push elements to a web page) (works well when no events listeners are involved):
// let html = usersA.map((item) => {
//     return `<div class="userId"> ${item.id} <h2 class="userName">${item.name}</h2> <p class="userEmail">${item.email}</p></div>`;
// });
// console.log(html.join(''));
// document.getElementById('root').innerHTML = html.join('');

/** Exercise 4
 * Create an function that get an array of Numbers as input
 * and return a new array with all numbers greater than 3
 * For example:
 * Give this array [0,1,1,2,3,5,8]
 * result [5,8]
 */
arr = [0, 1, 1, 2, 3, 5, 8];

// Solution 1: using filter (can use different syntax, but the idea is to iterate over the array and push numbers to a new array)
const result = function filterArray(arr) {
    return arr.filter((number) => number > 3);
};

// Solution 2: using reduce
const result2 = arr.reduce((acc, currentValue) => (currentValue > 3 ? [...acc, currentValue] : acc), []); // with conditional (ternary) operator.

// Solution 3: using for loop
const result3 = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 3) {
        result3.push(arr[i]);
    }
}

// Solution 4. Using forEach:
const result4 = [];
arr.forEach((number) => {
    if (number > 3) {
        result4.push(number);
    }
});

// Check the results
console.log(result(arr)); // [5, 8]
console.log(result2); // [5, 8]
console.log(result3); // [5, 8]
console.log(result4); // [5, 8]

// !Important to filter!
// Exercise 5:
// case insensitive filter of usersA array (from Exercise 3) by letter 'a' in name or email
let filteredUsers = usersA.filter(
    (user) => user.name.toLowerCase().includes('a') || user.email.toLowerCase().includes('a')
);
console.log(filteredUsers); // Output: [ { id: 3, name: 'Anne', email: '

// !Important to reduce!
// Exercise 6:
// reduce the array of numbers to a single number
arrayOfNumbersToReduce = [2, 5, 10, 100];

// Solution 1: using reduce
let reducedResult = arrayOfNumbersToReduce.reduce((accumulator, currentValue = 0) => accumulator + currentValue, 100); // where currentValue is optional and defaults to 0 but can be set to any other value

console.log(reducedResult); // Output: 217

// Solution 2: using forEach:
const reduce = (arr) => {
    let sum = 0;
    arr.forEach((item) => {
        sum += item;
    });
    return sum;
};

console.log(reduce(arrayOfNumbersToReduce)); // Output: 117

// !Important to find!
/** find the first item that match a condition */
/** find, findIndex */

const user = usersA.find((item) => {
    return item.id === 3;
});

console.log(user);

// !Important for array destructuring and using ...rest notation and spread operator*/
/** array destructuring */
let arrayForDestructuring = [1, 2, 3, 4, 5, 6];
let a = arrayForDestructuring[0];
let b = arrayForDestructuring[1];
let c = arrayForDestructuring[2];

console.log(a, b, c); // Output: 1 2 3

let [aA, bB, cC] = arrayForDestructuring;

console.log(aA, bB, cC); // Output: 1 2 3

let [x, ...rest] = arrayForDestructuring; // using rest operator to get all elements except the first one
console.log(x, ...rest); // Output: 1 2 3 4 5 6, because rest operator takes all remaining elements in the array (when called with ...rest it is spreading an array into individual elements) otherwise the output would be 1, [2, 3, 4, 5, 6]

/** spread operator */
let num1 = 1;
let num2 = [2, 6];
let num3 = [3, 4, 5];

let num4 = [num1, ...num2, ...num3]; // using spread operator to merge arrays, cannot use spread operator on num1 because it is a primitive type and thus not iterable.

console.log(num4.sort()); // with sort() function it will sort the array in ascending order, because spread operator is used in the context of creating a new array, not modifying the original array. Output: [1, 2, 3, 4, 5, 6]
