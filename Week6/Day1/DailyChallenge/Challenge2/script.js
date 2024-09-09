const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

// Create three functions.The two first functions should return a promise..

// The first function is named toJs():
// this function converts the morse json string provided above to a morse javascript object.
// if the morse javascript object is empty, throw an error(use reject)
// else return the morse javascript object(use resolve)

function toJs(morseString) {
    return new Promise((resolve, reject) => {
        try {
            const morseObject = JSON.parse(morseString);
            if (Object.keys(morseObject).length === 0) {
                reject('Morse object is empty');
            } else {
                resolve(morseObject);
            }
        } catch (error) {
            reject('Error parsing Morse string:', error);
        }
    });
}

// The second function called toMorse(morseJS), takes one argument: the new morse javascript object.

// This function asks the user for a word or a sentence.
// if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
// else return an array with the morse translation of the user’s word.
// if the user enters the word "Hello", the promise resolves with this value["....", ".", ".-..", ".-..", "---"]
// if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object

function toMorse(morseObject) {
    return new Promise((resolve, reject) => {
        const userInput = prompt('Enter a word or sentence:');
        const morseCode = [];

        for (const char of userInput) {
            const lowerCaseChar = char.toLowerCase();
            if (morseObject[lowerCaseChar]) {
                morseCode.push(morseObject[lowerCaseChar]);
            } else if (char === ' ') {
                morseCode.push(' '); // Add a space for regular spaces to handle smultiple words user input
            } else {
                reject(`Character '${char}' not found in Morse code`);
                return;
            }
        }

        resolve({ userInput, morseCode }); // requires userInput to build the proper output paragraph
    });
}

// The third function called joinWords(morseTranslation), takes one argument: the morse translation array

// this function joins the morse translation by using line break and display it on the page(ie.On the DOM)

function joinWords(morseTranslation) {
    return new Promise((resolve) => {
        const joinedMorse = morseTranslation.morseCode.join('<br>');
        const outputElement = document.getElementById('output');
        outputElement.innerHTML = `You entered: ${morseTranslation.userInput}<br>Morse code:<br>${joinedMorse}`;
        resolve();
    });
}

// Chain the three functions.
toJs(morse)
    .then((morseObject) => toMorse(morseObject))
    .then((morseTranslation) => joinWords(morseTranslation))
    .catch((error) => console.error(error));
