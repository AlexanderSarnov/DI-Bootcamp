// In your Javascript file, use setInterval to move the < div id = "animate" > to the right side of the < div id = "container" >, when the button is clicked on.
//     The < div id = "animate" > should move 1px to the right every milisecond, until it reaches the end of the < div id = "container" >.
//         Hint : use clearInterval as soon as the box reaches the right end side of the container

const container = document.getElementById("container");
const animateDiv = document.getElementById("animate");

let position = 0; // Keeps track of the animate div's left position

function moveAnimateDiv() {
    // Check if the animation has reached the end of the container
    if (position + animateDiv.offsetWidth >= container.offsetWidth) {
        clearInterval(intervalId);
        return;
    }

    // Update position and style
    position++;
    animateDiv.style.left = position + "px";
}

let intervalId; // Stores the interval ID for clearing later

function myMove() {
    // Clear any existing interval before starting a new one
    clearInterval(intervalId);
    position = 0; // Reset position after previous animation

    // Start the interval to move the animate div
    intervalId = setInterval(moveAnimateDiv, 1); // Move every 1 millisecond (adjust for desired speed)
}

