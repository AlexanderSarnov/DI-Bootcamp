// Exercise 1 : Giphy API
// Instructions
// With your knewly accumulated knowledge of the Fetch API lets write some cool code!

// You will work with this part of the documention

// You will use this Gif URL: https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// Explanation of the Gif URL and the queries

// q Request Parameter: Search query term or phrase.Above, the URL is searching for “hilarious” gifs

// rating Request Parameter: Filters results by specified rating.We are searching for Level 1 gifs.Check out the ratings documentation

// api_key Request Paramater: GIPHY API Key.Our API KEY is hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// Create a program to retrieve the data from the API URL provided above.
// Use the fetch() method to make a GET request to the Giphy API and Console.log the Javascript Object that you receive.
// Make sure to check the status of the Response and to catch any occuring errors.

const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'; // initialize a variable to store API key value

fetch(`https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=${apiKey}`) // fetch initiates GET request to the URL
    .then(response => { // callback to handle successful response
        if (!response.ok) { // error handling
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // parse the response body as JSON data
    })
    .then(data => {
        console.log(data);
        // This will log the retrieved JavaScript object
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        // This will log the retrieved error
    });