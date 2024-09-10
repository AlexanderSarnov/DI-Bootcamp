// Exercise 3

const URL = 'https://www.swapi.tech/api/starships/9/';

async function fetchSWapi() {
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const objectStarWars = await response.json();
        console.log(objectStarWars.result);
    } catch (error) {
        console.log('Error:', error);
    }
}

fetchSWapi();
