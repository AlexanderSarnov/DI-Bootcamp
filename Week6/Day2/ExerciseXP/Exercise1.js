// Gif URL: https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My

// initiate variables to store URL and API.
const address = 'https://api.giphy.com/v1/gifs';
const action = 'search';
const query = 'q=hilarious';
const rating = 'rating=g';
const api = 'api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const URL = `${address}/${action}?${query}&${rating}&${api}`;

// Using async/await and a .fetch() method to make
// GET request to the Gipfy API and
// console.log the JS object received
// Means that the promise shall be resolved
// And fetched JSON shall be converted to object

// define async function to fetch data from API
async function fetchGiphyAPI() {
    try {
        const response = await fetch(URL);
        // check if request is successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // Parse response body as JSON and return a promise
        const data = await response.json();
        // console log data for debugging
        console.log(data);
    } catch (error) {
        console.log('Error:', error);
    }
}

fetchGiphyAPI(); // call the function

// // Method 1: Using window.onload
// window.onload = function() {
//     fetchGiphyAPI();
// };

// Method 2: Using an IIFE
// (function() {
//     fetchGiphyAPI();
// })();
