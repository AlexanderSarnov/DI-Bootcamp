// server.js

const express = require('express');
const postRoutes = require('./server/routes/postRoutes'); // Import the router module
require('dotenv').config(); // Load environment variables from .env file

const app = express();

app.use(express.json());

const PORT = 3000;

app.use('/api', postRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
