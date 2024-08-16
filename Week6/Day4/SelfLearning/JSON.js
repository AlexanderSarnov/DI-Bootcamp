// * Using JSON

// Convert JSON object into JS object:
// json object
const jsonData = '{ "name": "John", "age": 22 }';

// converting to JS object
const obj = JSON.parse(jsonData);

// accessing the JS object
console.log(obj); // Output: {name: 'John', age: 22}

// accessing the JS element
console.log(obj.name); // Output: John

// Convert JS object into JSON object:
const jsonData2 = JSON.stringify(obj);

// Accessing the JSON data 2
console.log(jsonData2); // Output: {"name":"John","age":22}

// Accessing the JSON element
console.log(jsonData2.name); // Output: undefined --> cannot access JSON element. Use parse to convert into JS data and access it after.

// JSON methods syntax

// JSON.stringify(obj, replacer, space)
// obj: is the value to convert to a JSON string.
// replacer(Optional) is a function that alters the behavior of the stringification process.If this value is null or not provided, all object properties are included in the resulting JSON string.
//     space(Optional) is a String or Number object that’s used to insert white space into the output JSON string for readability purposes.

// JSON data types
// a number in JSON is just a number
console.log(JSON.stringify(1)); // 1
// a string in JSON is still a string, but double-quoted
console.log(JSON.stringify('test')); // "test"
console.log(JSON.stringify(true)); // true
console.log(JSON.stringify([1, 2, 3])); // [1,2,3]

// *JavaScript Object Properties Skipped By JSON.Stringify
// Function properties(methods).
// Symbolic properties.
// Properties that store undefined.
// Example:
let user0 = {
    sayHi() { // ignored
        alert("Hello");
    },

    [Symbol("id")]: 123, // ignored

    key: undefined // ignored
};

console.log(JSON.stringify(user0)); // {} (empty object)


// *Nested JavaScript Object In JSON
// Nested objects are supported and converted automatically.

// For instance:

let meetup = {
    title: "Conference",
    room: {
        number: 23,
        participants: ["John", "Ann"]
    }
};

console.log(JSON.stringify(meetup, null, 2));

/* The whole structure is stringified:

{
  "title": "Conference",
  "room": {
    "number": 23,
    "participants": [
      "John",
      "Ann"
    ]
  }
}

*/

// *ToJSON Method
// The toJSON() method returns a string representation of the Date object.

//    Example:

const event = new Date('May 21, 2020 12:15:30 UTC');

const jsonDate = event.toJSON();

console.log(jsonDate); // Output: 2020-05-21T12:15:30.000Z

// JSON.stringify automatically calls the toJSON() method.

// *JSON.Parse
// To decode a JSON - string, we need another method named JSON.parse.
// The syntax:

// let value = JSON.parse(str, [reviver]);
// str: JSON - string to parse.
// reviver : Optional function(key, value) //that will be called for each(key, value) pair and can transform the value.
//For instance:

let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

console.log(numbers); //[0, 1, 2, 3]
console.log(numbers[1]); // 1


// Or for nested objects:

let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let user = JSON.parse(userData);

console.log(user);
// { name: 'John', age: 35, isAdmin: false, friends: [ 0, 1, 2, 3 ] }

console.log(user.friends[1]); // 1