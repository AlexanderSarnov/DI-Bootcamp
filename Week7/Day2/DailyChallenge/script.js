const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'; // Giphy API key

// Declare variables to access DOM form elements
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const
    gifContainer = document.getElementById('gifContainer');
const deleteAllButton = document.getElementById('deleteAll');

// Declare variable to store an array off gifs
let gifs = [];

// Adding event listener to the form with an asynchronous function
searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const searchQuery = searchInput.value; // accessing user input to fetch gif from Giphy

    try { // try...catch block for error handling
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${searchQuery}&api_key=${apiKey}`); // using random endpoint with tag taken from the user input
        if (!response.ok) { // conditional with negation operator to handle error
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); // take promise from fetch and use response as json
        // console.log(data); // debugging response
        gifs = gifs.concat(data.data); // Append new gif to the array
        displayGifs(); // call displayGifs function
    } catch (error) { // log error for debugging
        console.error('Error fetching data:', error);
    }
});

function displayGifs() { // declare function that displays gifs with delete button
    gifContainer.innerHTML = ''; // clear all gifs
    gifs.forEach((gif, index) => { // iterate over each gif in the gifs array (where we store gifs every time search button is pressed)
        const gifDiv = document.createElement('div'); // create div element to store to hold gif with delete button

        const gifImage = document.createElement('img'); // create an image element to store the gif
        const deleteButton = document.createElement('button'); // create a delete button

        gifImage.src = gif.images.downsized_medium.url; // set the image source with the optimal size/performance balance from Giphy
        gifImage.alt = gif.title; // set the image title
        deleteButton.textContent = 'Delete';

        // Closure to capture index
        deleteButton.addEventListener('click', () => deleteGif(index));

        // append elements to DOM
        gifDiv.appendChild(gifImage);
        gifDiv.appendChild(deleteButton);
        gifContainer.appendChild(gifDiv);
    });
}

function deleteGif(index) { // delete gif from an array of gifs and display gifs without the deleted one
    gifs.splice(index, 1);
    displayGifs();
}

deleteAllButton.addEventListener('click', () => { // clear the gifs array and display the initial page (without gifs)
    gifs = [];
    displayGifs();
});