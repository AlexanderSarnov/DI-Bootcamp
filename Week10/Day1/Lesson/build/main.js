"use strict";
// let username: string = 'Dan';
// console.log(username);
// let age: number = 30;
// console.log(age);
// // main.ts to compile to main.js:
// // tsc main.ts main.js ---> in console
// //create config in root dir
// // tsc --init
// username = 'John';
// console.log(username);
// type number
let num = 1; // proper declaration with type parameter
// num = 9;
// num = 5;
// // num = '6' --> will have a compiling error
// console.log(num);
/** type string */
let str;
// str = 'abc';
// // str = 9 // will return a compiling error
// console.log(str);
/**type booleans */
let bool = true; //or false
// bool = false; //
// bool = 0; // will return compiling error
/**type any */
let anyType; // for cases when we don't have information about the type of data we are receiving from api, avoid when possible.
anyType = 10;
anyType = true;
anyType = 'false';
anyType = {};
console.log(anyType);
/** union type */
let strNum; // number or a string can be assigned to this variable without causing an error
/** type RegEx */
let reg = /\w+/g;
/** type arrays */
let arrNum = [1, 2, 3, 4, 5];
let arrStr = ['a', 'b', 'c'];
// arrStr[3] = 5; // cannot assign number to a string error
let arrNumStr = [1, 'a', 2, 'b'];
console.log(arrNumStr);
/** type tuples */
let myTuple = ['a', 1, 'b', 2, true];
// strict definition of type of each element of tuple and it shall match (with this syntax) qty of the elements shall match the qty of defined placholders
let Tuple2 = ['a', 1, 'b', 2];
// here we specify the order of the elements but we can now loop endless recursion.
console.log(typeof Tuple2);
/** type object */
let nyObj = {};
const user = {
    name: 'John',
    age: 25,
    isAdmin: false,
};
user.name = 'Dan';
console.log(user);
const userJohn = {
    name: 'John',
    age: 25,
    address: '123 Main St',
    // gender: undefined, //
};
const userAnne = {
    name: 'Anne',
    age: 35,
    address: '456 Elm St',
    gender: 'Female',
};
/** type Enum */
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U, Grade.D, Grade.C, Grade.B, Grade.A, typeof Grade);
let statusCodeUse = 'success'; // will only be able to choose from the list of specified above options
/** function */
