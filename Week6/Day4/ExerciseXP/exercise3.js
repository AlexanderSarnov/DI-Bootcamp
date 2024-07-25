// *Instructions
// Using this code:

const marioGame = {
    detail: "An amazing game!",
    characters: {
        mario: {
            description: "Small and jumpy. Likes princesses.",
            height: 10,
            weight: 3,
            speed: 12,
        },
        bowser: {
            description: "Big and green, Hates princesses.",
            height: 16,
            weight: 6,
            speed: 4,
        },
        princessPeach: {
            description: "Beautiful princess.",
            height: 12,
            weight: 2,
            speed: 2,
        }
    },
}

// *Convert this JS object into a JSON object.
const marioGameJSON = JSON.stringify(marioGame);

console.log(marioGameJSON); // Output: {"detail":"An amazing game!","characters":{"mario":{"description":"Small and jumpy. Likes princesses.","height":10,"weight":3,"speed":12},"bowser":{"description":"Big and green, Hates princesses.","height":16,"weight":6,"speed":4},"princessPeach":{"description":"Beautiful princess.","height":12,"weight":2,"speed":2}}}

// *What happens to the nested objects?
// The nested objects are converted into JSON string

// *Convert and pretty print this JS object into a JSON object.Hint : Check out the JSON lesson on the platform.
const marioGameJSONPretty = JSON.stringify(marioGame, null, 2); // Indent with 2 spaces

console.log(marioGameJSONPretty); // Output: 
// {
// "detail": "An amazing game!",
//     "characters": {
//     "mario": {
//         "description": "Small and jumpy. Likes princesses.",
//             "height": 10,
//                 "weight": 3,
//                     "speed": 12
//     },
//     "bowser": {
//         "description": "Big and green, Hates princesses.",
//             "height": 16,
//                 "weight": 6,
//                     "speed": 4
//     },
//     "princessPeach": {
//         "description": "Beautiful princess.",
//             "height": 12,
//                 "weight": 2,
//                     "speed": 2
//     }
// }
// }

// *Use your web inspector to add a breakpoint.Check the values of the JSON object in the debugger.
// I don't understand the meaning of checking the values of the JSON object in the debugger. I can log it an see it's values, I can parse it and log object. What is the goal of this instruction?