// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../features/books/booksSlice';

// Configure the Redux store with the books reducer
const store = configureStore({
    reducer: {
        books: booksReducer,
    },
});

export default store;
