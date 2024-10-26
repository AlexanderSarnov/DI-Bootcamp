// data/dataService.js

const axios = require('axios');

// Function to fetch posts from JSONPlaceholder API
const fetchPosts = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};

module.exports = { fetchPosts };
