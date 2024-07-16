// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.
// setTimeout(() => alert("Hello World"), 2000); // using unnamed function to call alert with a 2000 milliseconds delay

// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph < p > Hello World</ > to the < div id = "container" >.
// function addHelloWorldParagraph() {
//     const conntainer = document.getElementById("container");
//     const newParagraph = document.createElement("p");

//     newParagraph.textContent = "Hello World";

//     conntainer.appendChild(newParagraph);
// }

// setTimeout(addHelloWorldParagraph, 2000); // Call a function after 2 seconds delay

// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph < p > Hello World</ > to the < div id = "container" >.
// The interval will be cleared(ie.clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared(ie.clearInterval) as soon as there will be 5 paragraphs inside the < div id = "container" >.

const container = document.getElementById("container");
const stopButton = document.getElementById("clear");

let paragraphCount = 0; // Keeps track of the number of paragraphs
let intervalId; // Stores the interval ID for clearing later

function addHelloWorldParagraph() {
    if (paragraphCount >= 5) {
        clearInterval(intervalId); // Clear interval if 5 paragraphs exist
        container.innerHTML = ""; // Clear all existing paragraphs
        paragraphCount = 0; // Reset paragraph count

        // Restart the loop after a brief delay (optional)
        intervalId = setTimeout(startLoop, 2000); // Restart after 2 seconds
    } else {
        const newParagraph = document.createElement("p");
        newParagraph.textContent = "Hello World";
        container.appendChild(newParagraph);
        paragraphCount++;
    }
}

function startLoop() {
    intervalId = setInterval(addHelloWorldParagraph, 2000);
}

startLoop(); // Start the loop initially

stopButton.addEventListener("click", function () {
    clearInterval(intervalId);
    container.innerHTML = "";
    paragraphCount = 0;
    intervalId = null; // Reset intervalId to null
    startLoop();
});