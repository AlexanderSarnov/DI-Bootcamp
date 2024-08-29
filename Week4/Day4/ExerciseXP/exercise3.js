// Declare a global variable named allBoldItems.
var allBoldItems = [];
const boldItems = document.querySelectorAll("body p strong");

// Create a function called getBoldItems() that takes no parameter.This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
function getBoldItems() {
    boldItems.forEach(boldItem => {
        allBoldItems.push(boldItem.textContent)
    });


};
getBoldItems()
console.log(allBoldItems);

// Create a function called highlight() that changes the color of all the bold text to blue.
function highlight() {
    boldItems.forEach(item => item.style.color = "blue") // set text color
};

// Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.
function returnItemsToDefault() {
    boldItems.forEach(item => item.style.color = "") // set text color back to default
};

// Call the function highlight() on mouseover(ie.when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout(ie.when the mouse pointer is moved out of the paragraph).
const paragraph = document.querySelector("p");
paragraph.addEventListener("mouseover", highlight);
paragraph.addEventListener("mouseout", returnItemsToDefault);

