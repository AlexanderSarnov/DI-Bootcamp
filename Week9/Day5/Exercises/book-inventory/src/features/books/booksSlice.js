// src/features/books/booksSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Initial state with an array of books
const initialState = {
    books: [
        { id: 1, title: '1984', author: 'George Orwell', genre: 'Science Fiction' },
        { id: 2, title: 'The Shining', author: 'Stephen King', genre: 'Horror' },
        { id: 3, title: 'Harry Potter', author: 'J.K. Rowling', genre: 'Fantasy' },
    ],
};

// Create a slice  for books with an initial state
const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
});

// Selector to get all books from the state
export const selectBooks = (state) => state.books.books;

export default booksSlice.reducer;
