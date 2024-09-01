const phrase = 'To be or not to be';
const substrings = ['To', ' ', 'be', 'or', 'not', 'to'];

substrings.forEach((substring) => {
    const index = phrase.indexOf(substring);
    console.log(`Index of "${substring}" is ${index}`);
});
