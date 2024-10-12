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
let num: number = 1; // proper declaration with type parameter
// num = 9;
// num = 5;
// // num = '6' --> will have a compiling error

// console.log(num);

/** type string */
let str: string;
// str = 'abc';
// // str = 9 // will return a compiling error

// console.log(str);

/**type booleans */
let bool: boolean = true; //or false
// bool = false; //
// bool = 0; // will return compiling error

/**type any */
let anyType: any; // for cases when we don't have information about the type of data we are receiving from api, avoid when possible.

anyType = 10;
anyType = true;
anyType = 'false';
anyType = {};

console.log(anyType);

/** union type */
let strNum: number | string; // number or a string can be assigned to this variable without causing an error

/** type RegEx */
let reg: RegExp = /\w+/g;

/** type arrays */
let arrNum: number[] = [1, 2, 3, 4, 5];
let arrStr: string[] = ['a', 'b', 'c'];
// arrStr[3] = 5; // cannot assign number to a string error

let arrNumStr: (number | string)[] = [1, 'a', 2, 'b'];

console.log(arrNumStr);

/** type tuples */
let myTuple: [string, number, string, number, boolean] = ['a', 1, 'b', 2, true];
// strict definition of type of each element of tuple and it shall match (with this syntax) qty of the elements shall match the qty of defined placholders

let Tuple2: (string | number)[] = ['a', 1, 'b', 2];
// here we specify the order of the elements but we can now loop endless recursion.
console.log(typeof Tuple2);

/** type object */
let nyObj: object = {};
const user = {
    name: 'John',
    age: 25,
    isAdmin: false,
};

user.name = 'Dan';

console.log(user);

/** type or interface */

interface UserInterface {
    // for classes declaration
    name: string;
    age: number;
    address: string;
    gender?: string | undefined | null; // ? makes property optional
}

type User = {
    // for declaring everything else that is not classes
    name: string;
    age: number;
    address: string;
    gender?: strNumBool; // ? makes property optional
};

type strNumBool = string | number | boolean; // with union type we can create type, but we can't create it with interface (so for similar result will need to specify types inside interface)

const userJohn: UserInterface = {
    name: 'John',
    age: 25,
    address: '123 Main St',
    // gender: undefined, //
};

const userAnne: User = {
    name: 'Anne',
    age: 35,
    address: '456 Elm St',
    gender: 'Female',
};

/** type Enum */
enum Grade { // in js it will be an object of a function Grade with enumerated values
    U,
    D,
    C,
    B,
    A,
}

console.log(Grade.U, Grade.D, Grade.C, Grade.B, Grade.A, typeof Grade);

/** type literal */
type statusCode = 'loading' | 'success' | 'failed';

let statusCodeUse: statusCode = 'success'; // will only be able to choose from the list of specified above options

// makes sure no typos allowed in status code

// statusCode = 'loadingt'; // returns error
// statusCode = 'loading'; // allowed value.

/** type aliases */
type StringOrNumber = string | number;

type StringOrNumberOrBool = StringOrNumber | boolean;

type Student = {
    name: string;
    age: number;
    grade: StringOrNumber; // using type aliases instead of declaring it separately
};

/** function */
