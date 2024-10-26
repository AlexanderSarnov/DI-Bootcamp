// Import required libraries
const express = require('express');

// Create Express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Constants
const PORT = 5000;

// Simulated database
let books = [
    { id: 1, title: '1984', author: 'George Orwell', publishedYear: 1949 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedYear: 1960 },
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publishedYear: 1925 },
];

// Route handlers
// GET /api/books: Return a list of all books
app.get('/api/books', (req, res) => {
    res.json(books);
});

// GET /api/books/:bookId: Return a specific book based on its id
app.get('/api/books/:bookId', (req, res) => {
    const bookId = parseInt(req.params.bookId);
    const book = books.find((b) => b.id === bookId);
    if (book) {
        res.json(book);
    } else {
        res.status(404).send('Book not found');
    }
});

// POST /api/books: Create a new book
app.post('/api/books', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
        publishedYear: req.body.publishedYear,
    };
    books.push(newBook);
    res.status(201).json(newBook);
});

// PUT /api/books/:bookId: Update an existing book
app.put('/api/books/:bookId', (req, res) => {
    const bookId = parseInt(req.params.bookId);
    const book = books.find((b) => b.id === bookId);
    if (book) {
        book.title = req.body.title;
        book.author = req.body.author;
        book.publishedYear = req.body.publishedYear;
        res.json(book);
    } else {
        res.status(404).send('Book not found');
    }
});

// DELETE /api/books/:bookId: Delete a book
app.delete('/api/books/:bookId', (req, res) => {
    const bookId = parseInt(req.params.bookId);
    const bookIndex = books.findIndex((b) => b.id === bookId);
    if (bookIndex !== -1) {
        books.splice(bookIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Book not found');
    }
});

// Start the server and listen on a specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
