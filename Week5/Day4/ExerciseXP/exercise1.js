// Using a DOM property, retrieve the h1 and console.log it.
console.log(document.querySelector("article h1").textContent); // using query selector and textContent

// Using DOM methods, remove the last paragraph in the < article > tag.
document.querySelector("article").lastElementChild.remove(); // using .remove() method, considering that last element is "P"

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
document.querySelector("article h2").addEventListener("click", function () {
    this.style.backgroundColor = "red";
});

// Add an event listener which will hide the h3 when it’s clicked on(use the display: none property).
document.querySelector("article h3").addEventListener("click", function () {
    this.style.display = "none";
});

// Add a < button > to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
// Create the button element
const boldButton = document.createElement("button");
boldButton.textContent = "Make Paragraphs Bold"
boldButton.id = "boldButton"

// Append the button to the article
document.querySelector("article").appendChild(boldButton);

boldButton.addEventListener("click", function () {
    const paragraphs = document.querySelectorAll("article p");
    paragraphs.forEach(paragraph => {
        paragraph.style.fontWeight = "bold";
    });
});

//     BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
const h1Element = document.querySelector("article h1");

h1Element.addEventListener("mouseover", function () {
    const randomFontSize = Math.floor(Math.random() * 101); // Generate random between 0-100
    this.style.fontSize = `${randomFontSize}px`; // Set font size with px unit
});

h1Element.addEventListener("mouseout", function () {
    // Reset font size to default on mouseout
    this.style.fontSize = "";
});

// BONUS: When you hover on the 2nd paragraph, it should fade out(Check out “fade css animation” on Google)

document.querySelector("article p:nth-child(5)").classList = "fade-out" // considering paragraph is the 5-th element