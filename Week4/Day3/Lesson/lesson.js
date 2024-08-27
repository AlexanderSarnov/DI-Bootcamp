// Functions

// *Exercise 1

// 1. Create a structured HTML file linked to a JS file
// lesson.html with lesson.js linked to it
// 2. Write a Javascript function that takes a parameter: _myAge_
function javaScriptFunction(myAge) {

    // 3. In the function, console.log the age of my mum and my dad.My mum is twice my age, and my dad is 1.2 the age of my mum.
    let momAge = 2 * myAge;
    let dadAge = 1.2 * momAge;

    console.log(`My mom is ${momAge} and my dad is ${dadAge}`);

}
// 4. Call the function.
javaScriptFunction(15);


// *Exercise 2

// 1. Create a structured HTML file linked to a JS file

// 2. Write a Javascript function that takes a parameter: _myAge_
function javaScriptFunction2(myAge) {
    momAge = 2 * myAge

    // 3. In the function, return the age of my mum(my mum is twice my age)
    return momAge
}
// 4. Call the function
javaScriptFunction2(15)
// 5. In the global scope, console.log the result of the function
console.log(javaScriptFunction2(15));


