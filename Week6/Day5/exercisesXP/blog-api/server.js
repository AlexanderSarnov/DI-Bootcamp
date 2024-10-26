// server.js

const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.json());

const PORT = 3000;
const DATA_FILE_PATH = path.join(__dirname, 'data', 'data.js');
let blogPosts = require('./data/data.js');

function writeDataToFile() {
    const dataToWrite = `module.exports = ${JSON.stringify(blogPosts, null, 2)}`;
    fs.writeFile(DATA_FILE_PATH, dataToWrite, (err) => {
        if (err) {
            console.error('Error writing to data file:', err);
        } else {
            console.log('Data saved successfully.');
        }
    });
}

// Import and mount the router module
const routes = require('./routes/index');
app.use('/', routes);

app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
