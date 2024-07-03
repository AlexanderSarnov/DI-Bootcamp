// Exercise 5 : Users
// Instructions
// Create a new structured HTML file and a new Javascript file

// Using Javascript:
// Retrieve the div and console.log it
const containerDiv = document.getElementById("container");
console.log(containerDiv);

// Change the name “Pete” to “Richard”.
const list2ndItem = document.querySelector(".list li:nth-child(2)");
list2ndItem.textContent = "Richard";

// Delete the second < li > of the second < ul >.
const secondList = document.querySelectorAll(".list")[1];
const secondListItem = secondList.querySelector("li:nth-child(2)");
secondList.removeChild(secondListItem);

// Change the name of the first < li > of each < ul > to your name. (Hint : use a loop)
const firstListItems = document.querySelectorAll(".list li:nth-child(1)");
for (const listItem of firstListItems) {
    listItem.textContent = "Alexander";
}

// Using Javascript:
// Add a class called student_list to both of the < ul > 's.
const allLists = document.querySelectorAll(".list");
for (const list of allLists) {
    list.classList.add("student_list");
}

// Add the classes university and attendance to the first < ul >.
const firstList = document.querySelector(".list");
firstList.classList.add("university", "attendance");

// Using Javascript:
// Add a “light blue” background color and some padding to the < div >.
containerDiv.style.backgroundColor = "lightblue";
containerDiv.style.padding = "5px";

/*
 Do not display the < li > that contains the text node “Dan”.(the last < li > of the second < ul >)
- there was typo in the exercise text, specifying wrong location of "Dan" item.
 */
secondListLastItem = secondList.querySelector("li:nth-child(2)")
secondListLastItem.style.display = "none";

// Add a border to the < li > that contains the text node “Richard”.(the second < li > of the < ul >)
list2ndItem.style.border = "1px solid black";

// Change the font size of the whole body.
document.body.style.fontSize = "18px";

//     Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
const containerColor = containerDiv.style.backgroundColor;
if (containerColor.toLowerCase() === "lightblue") {
    const firstUserName = document.querySelector(".list li:nth-child(1)").textContent;
    const secondUserName = document.querySelector(".list li:nth-child(2)").textContent;
    alert(`Hello ${firstUserName} and ${secondUserName}`);
} // Works for the given file structure only

