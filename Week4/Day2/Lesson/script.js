console.log('Hello, world!')

// !variables
let x = 3
var y = 3
const z = 3

// !naming
const namingConvention = "lowerCamelCase"

let p, q // create variables without defining a value (not defined and undefined are different things)

p = 5 + 6
q = x * 10

console.log(q);

// !quotes
console.log('Jimmy\'s Car'); // using apostrophe inside the text

// + operator for connecting multiline strings
let longString = "This is a very long string which needs " +
    "to wrap across multiple lines because " +
    "otherwise, my code is unreadable.";
console.log(longString);

let longStringBreaks = "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
console.log(longStringBreaks); // shall result in a string being present as multiline string

console.log(longStringBreaks.length) // 109 symbols long, object oriented example

// !String Methods
// *indexOf()
// let str = "Hello Everyone, please say hello to the class";
// let posUppercaseHello = str.indexOf("Hello"); // case sensitive
// let posLowercaseHello = str.indexOf("hello");
// console.log(posUppercaseHello) // 0
// console.log(posLowercaseHello) // 27

// let secondstr = "hello Everyone, please say hello to the class";
// let secondStrPosHello = secondstr.indexOf("hello");
// console.log(secondStrPosHello) // 0

// * substring(startIndex, endIndex)
let str = "Hello Everyone, please say hello to the class ";
str.substring(0, 4) //returns "Hell" --> the index 4 isn't included
str.substring(2, 4) //returns "ll"
str.substring(15) //returns "please say hello to the class"

// *toLowerCase()
let myStr = "Hello Everyone, Please say hello to the class ";
myStr.toLowerCase() //returns "hello everyone, please say hello to the class "

// *replace()
// *concat()
// *toUpperCase()
// *trim()
// *charAt()

