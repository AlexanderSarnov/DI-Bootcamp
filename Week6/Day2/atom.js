// // Exercise1
// // Gif URL: https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
//
// // initiate variables to store URL and API.
// const address = 'https://api.giphy.com/v1/gifs'
// const action = 'search'
// const query = 'q=hilarious'
// const rating = 'rating=g'
// const api = 'api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'
// const URL = `${address}/${action}?${query}&${rating}&${api}`
//
// // Using async/await and a .fetch() method to make
// // GET request to the Gipfy API and
// // console.log the JS object received
// // Means that the promise shall be resolved
// // And fetched JSON shall be converted to object
//
// // define async function to fetch data from API
// async function fetchGiphyAPI() {
//   try{
//     const response = await fetch(URL);
//     // check if request is successful
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     // Parse response body as JSON and return a promise
//     const data = await response.json();
//     // console log data for debugging
//     console.log(data);
//   } catch (error) {
//     console.log('Error:', error);
//   }
// }
//
// fetchGiphyAPI();


//------------------------------------------------------------------------------------------------------------

// // Exercise2

// Gif URL: https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My

// // initiate variables to store URL and API.
// const address = 'https://api.giphy.com/v1/gifs'
// const action = 'search'
// const query = 'q=sun'
// const limit = 'limit=10'
// const offset = 'offset=2'
// const rating = 'rating=g'
// const api = 'api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'
// const URL = `${address}/${action}?${query}&${limit}&${offset}&${rating}&${api}`
//
// async function fetchGipfyAPI() {
//   try{
//     const response = await fetch(URL);
//
//     if(!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log(data);
//     } catch(error) {
//     console.log('Error:', error)
//   }
// }
//
// fetchGipfyAPI(); // call function

//------------------------------------------------------------------------------------------------------------

// // Exercise 3
//
// const URL = "https://www.swapi.tech/api/starships/9/"
//
// async function fetchSWapi() {
//   try{
//     const response = await fetch(URL);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//   const objectStarWars = await response.json();
//   console.log(objectStarWars.result);
//   } catch(error) {
//     console.log('Error:', error)
//   }
// }
//
// fetchSWapi();
