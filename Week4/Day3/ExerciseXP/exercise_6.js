// Exercise 6 : Change The Navbar
// Instructions
// Create a new structured HTML file and a new Javascript file

//     Add the code above, to your HTML file

// Using Javascript, in the < div >, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
const navBarDiv = document.getElementById("navBar");
const socialNetworkNavigationDiv = navBarDiv.setAttribute("id", "socialNetworkNavigation");

// We are going to add a new < li > to the < ul >.
//     First, create a new < li > tag(use the createElement method).
const newListElement = document.createElement("li");

// Create a new text node with “Logout” as its specified text.
const logOutTextNode = document.createTextNode("Logout");

// Append the text node to the newly created list node(<li>).
newListElement.appendChild(logOutTextNode);

// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
const unorderedList = document.querySelector("#socialNetworkNavigation ul");
unorderedList.appendChild(newListElement);

// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).
const firstListItem = unorderedList.firstElementChild;
const lastListItem = unorderedList.lastElementChild;

console.log(`List items text: \nFirst li item: ${firstListItem.textContent}, \nSecond li item: ${lastListItem.textContent}.`);