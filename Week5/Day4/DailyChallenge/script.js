// In todays exercise we will be creating a Mad Libs game.
// If you’ve never played this game, a mad lib is a game where you fill in a bunch of blank inputs with different word types(ie : noun, adjective, verb), and then a story is generated based on the words you chose, and sometimes the story is surprisingly funny.

// In this exercise you work with the HTML code presented below.

// Follow these steps:

// Get the value of each of the inputs in the HTML file when the form is submitted.Remember the event.preventDefault()
const button = getButton()
const shuffleButton = document.getElementById("shuffle")

button.addEventListener("click", handleClick)
shuffleButton.addEventListener("click", shuffleStories)

// Make sure you check the console for errors when playing the game.
//     Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed(but keep the values entered by the user).The user could click the button at least three times and get a new story.Display the stories randomly.

function getButton() {
    return document.getElementById("lib-button");
}

function getFormValues() {
    const noun = document.getElementById("noun").value;
    const adjective = document.getElementById("adjective").value;
    const person = document.getElementById("person").value;
    const verb = document.getElementById("verb").value;
    const place = document.getElementById("place").value;
    return { noun, adjective, person, verb, place };
}

function handleClick(event) {
    shuffleStories(event, true);
}

function shuffleStories(event, isFirstStory = false) {
    event.preventDefault() // prevernt default is used here in order to prevent the default behavior of the sumbit button that refreshes the page once it is clicked

    const { noun, adjective, person, verb, place } = getFormValues(); // using destructuring

    const randomNumber = generateRandomNumber();

    // Make sure the values are not empty
    if ([noun, adjective, person, verb, place].includes(""))
        return alert("Please fill in all the fields")


    const stories = ([writeStory(), writeStory2(), writeStory3()]);
    const story = isFirstStory ? stories[0] : stories[randomNumber];
    appendStory(story);
}

function appendStory(storyText) {
    const paragraph = document.getElementById("story");
    const span = document.createElement("span");
    span.innerText = storyText;
    paragraph.textContent = "";
    paragraph.appendChild(span);
}

function writeStory() {
    const { noun, adjective, person, verb, place } = getFormValues();
    return `One sunny afternoon, a ${adjective} person named ${person} was ${verb} in his cluttered apartment when discovered a tiny ${noun} tucked away under the couch. It looked like a miniature ${place}!`;
}

function writeStory2() {
    const { noun, adjective, person, verb, place } = getFormValues();
    return `Two ${adjective} friends named ${person} and Mark were ${verb} to discover ${place} for a ${noun} and a buch of dollars.`;
}

function writeStory3() {
    const { noun, adjective, person, verb, place } = getFormValues();
    return `${adjective} ${person} ${verb} away from ${noun} reached ${place} by an accident!`;
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 3) // Generate numbers 0-2 for indices of stories array
}