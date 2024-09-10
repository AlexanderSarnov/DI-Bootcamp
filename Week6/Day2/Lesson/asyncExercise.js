// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => console.error('Error:', error));

// Using async/await

async function fetchUsers() {
    try {
        // await keyword makes the function wait until the promise resolves
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        // Check if the request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // Parse the response body as JSON data and return it as a promise
        const data = await response.json();
        // Log the retrieved data for debugging purposes
        console.log(data);
    } catch (error) {
        // Log the error for debugging purposes
        console.error('Error:', error);
    }
}

fetchUsers(); // call the function

// So general rules for fetchUsers are:
// 1. Use async/await for making API calls.
// 2. Use try/catch block to handle errors.
// 3. throw an error within the try block if there is an issue with the HTML with the status code
// 4. catch will handle the error and log it to the console. (which error? The one thrown in the try block)
