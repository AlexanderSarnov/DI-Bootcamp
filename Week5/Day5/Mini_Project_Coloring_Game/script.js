/* 
!! This time I saw Ziv's solution and it is much better and elegant approach than mine. Yet I decided to upload what I had done during the coding day.
!! I took the functionality from the example page and slightly adjusted it to work with my variables.
*/

// **Declare global variables **

const sideBarDiv = document.getElementById("sideBar"); // Get a reference to the sideBar div element
const mainDiv = document.getElementById("main"); // Get a reference to the main div element
let color = null; // Variable to store the selected color
let mousedown = false; // Flag to track mouse down state

// **Create and call functions for the html div tags **

// Create a "Clear" button within the sideBar div element
function createClearButton() {
    const button = document.createElement("button"); // 1. Create a button element
    button.textContent = "Clear"; // 2. Set the button text content to be "Clear"
    sideBarDiv.appendChild(button); // 3. Append the button to the sideBar div
}
createClearButton(); // Call the function to create button

// Create "Color" divs within the sideBar div element
function createColorDivs() {
    const colorList = [
        "red",
        "orangered",
        "orange",
        "yellow",
        "yellowgreen",
        "lightgreen",
        "green",
        "turquoise",
        "cyan",
        "lightskyblue",
        "dodgerblue",
        "blue",
        "darkblue",
        "indigo",
        "darkmagenta",
        "violet",
        "lightpink",
        "lightgray",
        "gray",
        "black",
        "white",
    ];

    // Loop through the color list and create divs
    colorList.forEach((color) => {
        const colorDiv = document.createElement("div");
        colorDiv.style.backgroundColor = color;

        // Append the color div to the sideBar div
        sideBarDiv.appendChild(colorDiv);
    });
}

// Call the function to create "Color" divs
createColorDivs();

// Create divs within the main div element
function createDivs() {
    // Loop to create divs
    for (let i = 0; i < 1200; i++) { // !! Change 1200 to any number for screen resolution
        const div = document.createElement("div");
        div.classList.add("single-div"); // Add a class for styling (optional)
        mainDiv.appendChild(div);
    }
}

// Call the function to create the divs
createDivs();

// ** Actions functionality for color selection and drawing **

// Clear button functionality: clear background color of divs within main div
const clearButton = document.getElementsByTagName("button")[0];
clearButton.addEventListener("click", function () {
    for (const fillBlock of mainDiv.querySelectorAll("div")) {
        fillBlock.style.backgroundColor = "white";
    }
});

// Mouse events for tracking color selection and drawing
document.addEventListener("mousedown", function () {
    mousedown = true;
});

document.addEventListener("mouseup", function () {
    mousedown = false;
});

// Color selection from sidebar blocks
const colorBlocks = sideBarDiv.querySelectorAll("div"); // Select all divs within sidebar
for (const colorBlock of colorBlocks) {
    colorBlock.addEventListener("click", function (event) {
        color = event.target.style.backgroundColor;
    });
}

// Filling main div elements with color
for (const fillBlock of mainDiv.querySelectorAll("div")) {
    fillBlock.addEventListener("mousedown", function (event) {
        if (color !== null) {
            event.target.style.backgroundColor = color;
        }
    });

    fillBlock.addEventListener("mouseover", function (event) {
        if (mousedown && color !== null) {
            event.target.style.backgroundColor = color;
        }
    });
}