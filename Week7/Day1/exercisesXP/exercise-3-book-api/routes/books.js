// routes/books.js

const express = require('express');
const router = express.Router();

// Sample in-memory database for storing books
let books = [];

// Get all books
router.get('/', (req, res) => {
    res.json(books);
});

// Add a new book
router.post('/', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
        publishedYear: req.body.publishedYear,
    };
    books.push(newBook);
    res.status(201).json(newBook);
});

// Update a book by ID
router.put('/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find((b) => b.id === bookId);
    if (book) {
        book.title = req.body.title || book.title;
        book.author = req.body.author || book.author;
        book.publishedYear = req.body.publishedYear || book.publishedYear;
        res.json(book);
    } else {
        res.status(404).send('Book not found');
    }
});

// Delete a book by ID
router.delete('/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const bookIndex = books.findIndex((b) => b.id === bookId);
    if (bookIndex !== -1) {
        books.splice(bookIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Book not found');
    }
});

module.exports = router;
