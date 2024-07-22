// Instructions
// Using this array:

const gameInfo = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },
];

// Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
// The new array should look like this :
// const usernames = ["john!", "becky!", "susy!", "tyson!"]

const usernames = []; // Create an empty array to store usernames

gameInfo.forEach(player => {
    usernames.push(player.username + "!"); // Access username property, add "!", and push to usernames array
});

console.log(usernames);


// 2. Create an array using forEach that contains the usernames of all players with a score bigger than 5.
// The new array should look like this:
// const winners = ["becky", "susy"]
const winners = []; // Create an empty array to store winners

gameInfo.forEach(winner => {
    if (winner.score > 5) { // compare score key value with number 5
        winners.push(winner.username); // push winner to winners array
    }
});

console.log(winners);

// 3. Find and display the total score of the users. (Hint: The total score is 71)

// Method 1: Using reduce()
const totalScore1 = gameInfo.reduce((acc, player) => acc + player.score, 0);
console.log("Total Score:", totalScore1); // Output: Total Score: 71

// Method 2: Using forEach and a variable
let totalScore2 = 0;
gameInfo.forEach(player => {
    totalScore2 += player.score;
});
console.log("Total Score:", totalScore2); // Output: Total Score: 71