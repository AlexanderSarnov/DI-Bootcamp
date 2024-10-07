// src/features/books/selectors.js
import { createSelector } from '@reduxjs/toolkit';
import { selectBooks } from './booksSlice';

// Selector to get horror books
export const selectHorrorBooks = createSelector([selectBooks], (books) =>
    books.filter((book) => book.genre === 'Horror')
);

// Selector to get fantasy books
export const selectFantasyBooks = createSelector([selectBooks], (books) =>
    books.filter((book) => book.genre === 'Fantasy')
);

// Selector to get science fiction books
export const selectScienceFictionBooks = createSelector([selectBooks], (books) =>
    books.filter((book) => book.genre === 'Science Fiction')
);
