// Instructions
// Read carefully the documention to understand all the possible queries that the URL accept.
// Use the Fetch API to retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
// Make sure to check the status of the Response and to catch any occuring errors.
// Console.log the Javascript Object that you receive.

const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'; // initialize a variable to store API key value

fetch(`https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=${apiKey}`) // fetch initiates GET request to the URL with the required adjustments
    .then(response => { // callback to handle successful response
        console.log('Response status:', response.status); // Log the response status
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