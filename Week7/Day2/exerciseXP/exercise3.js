// Exercise 3 : Async Function
// Instructions
// Improve the program below:

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));
// Create an async function, that will await for the above GET request.
// The program shouldn’t contain any then() method.
// Make sure to check the status of the Response and to catch any occuring errors.
async function fetchStarship() { // declare async function
    try { // use try...catch for proper error handling
        const response = await fetch("https://www.swapi.tech/api/starships/9/"); // wait for fetch request to complete and store the response object
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const starshipData = await response.json(); // wait for the response to be parsed as JSON before proceeding
        console.log(starshipData); // log the parsed JSON data
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchStarship(); // to run in terminal "node exercise3.js"