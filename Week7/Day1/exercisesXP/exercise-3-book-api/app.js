// app.js

const express = require('express');
const booksRouter = require('./routes/books'); // Import the router module

const app = express();

app.use(express.json());

const PORT = 3000;

// Mount the router module
app.use('/books', booksRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
