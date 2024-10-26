// server/controllers/bookController.js

const bookModel = require('../models/bookModel');

const getAllBooks = async (req, res) => {
    try {
        const books = await bookModel.getBooks();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching books' });
    }
};

const getBook = async (req, res) => {
    try {
        const book = await bookModel.getBookById(req.params.id);
        if (book) {
            res.json(book);
        } else {
            res.status(404).json({ error: 'Book not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the book' });
    }
};

const createBook = async (req, res) => {
    try {
        const { title, author, publishedYear } = req.body;
        const newBook = await bookModel.createBook(title, author, publishedYear);
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating the book' });
    }
};

const updateBook = async (req, res) => {
    try {
        const { title, author, publishedYear } = req.body;
        const updatedBook = await bookModel.updateBook(req.params.id, title, author, publishedYear);
        if (updatedBook) {
            res.json(updatedBook);
        } else {
            res.status(404).json({ error: 'Book not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the book' });
    }
};

const deleteBook = async (req, res) => {
    try {
        await bookModel.deleteBook(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the book' });
    }
};

module.exports = {
    getAllBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook,
};
