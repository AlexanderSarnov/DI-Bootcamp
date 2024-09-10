// initiate variables to store URL and API.
const address = 'https://api.giphy.com/v1/gifs';
const action = 'search';
const query = 'q=sun';
const limit = 'limit=10';
const offset = 'offset=2';
const rating = 'rating=g';
const api = 'api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const URL = `${address}/${action}?${query}&${limit}&${offset}&${rating}&${api}`;

async function fetchGipfyAPI() {
    try {
        const response = await fetch(URL);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Error:', error);
    }
}

fetchGipfyAPI(); // call function
