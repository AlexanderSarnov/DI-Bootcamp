// app.js

const express = require('express');
const routes = require('./routes/index'); // Import the router module

const app = express();

app.use(express.json());

const PORT = 3000;

// Mount the router module
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
