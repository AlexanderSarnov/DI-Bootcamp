// app.js

const express = require('express');
const { fetchPosts } = require('./data/dataService'); // Import the dataService module

const app = express();

const PORT = 5000;

app.use(express.json());

// Endpoint to fetch posts from JSONPlaceholder API
app.get('/api/posts', async (req, res) => {
    try {
        const posts = await fetchPosts(); // Use the fetchPosts function to get data
        res.json(posts);
        console.log('Data successfully retrieved and sent as a response.');
    } catch (error) {
        res.status(500).send('Error retrieving posts');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
