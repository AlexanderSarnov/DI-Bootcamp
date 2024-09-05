// Exercise 3 : JSON Mario
// Instructions
// Using this code:

const marioGame = {
    detail: 'An amazing game!',
    characters: {
        mario: {
            description: 'Small and jumpy. Likes princesses.',
            height: 10,
            weight: 3,
            speed: 12,
        },
        bowser: {
            description: 'Big and green, Hates princesses.',
            height: 16,
            weight: 6,
            speed: 4,
        },
        princessPeach: {
            description: 'Beautiful princess.',
            height: 12,
            weight: 2,
            speed: 2,
        },
    },
};
// Convert this JS object into a JSON object. What happens to the nested objects ?
let jsonMarioGame = JSON.stringify(marioGame);
console.log(jsonMarioGame);

// *Nested objects in JSON are represented as objects within objects. When you convert a JavaScript object into a JSON

// Convert and pretty print this JS object into a JSON object. Hint : Check out the JSON lesson on the platform.

let jsonPrettyMarioGame = JSON.stringify(marioGame, undefined, 2);
console.log(jsonPrettyMarioGame);

// Use your web inspector to add a breakpoint. Check the values of the JSON object in the debugger.
// *Done
