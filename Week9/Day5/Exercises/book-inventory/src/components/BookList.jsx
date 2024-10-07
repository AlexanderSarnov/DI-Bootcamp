// src/components/BookList.jsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectBooks } from '../features/books/booksSlice';
import { selectHorrorBooks, selectFantasyBooks, selectScienceFictionBooks } from '../features/books/selectors';

// Memoize the BookList component to improve performance when the genre state changes
const BookList = React.memo(() => {
    const [genre, setGenre] = useState('All');
    const books = useSelector((state) => {
        switch (genre) {
            case 'Horror':
                return selectHorrorBooks(state);
            case 'Fantasy':
                return selectFantasyBooks(state);
            case 'Science Fiction':
                return selectScienceFictionBooks(state);
            default:
                return selectBooks(state);
        }
    });

    console.log('Current genre:', genre);
    console.log('Books:', books);

    return (
        <div>
            <h1>Book Inventory</h1>
            <div>
                <button onClick={() => setGenre('All')}>All</button>
                <button onClick={() => setGenre('Horror')}>Horror</button>
                <button onClick={() => setGenre('Fantasy')}>Fantasy</button>
                <button onClick={() => setGenre('Science Fiction')}>Science Fiction</button>
            </div>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        {book.title} by {book.author} ({book.genre})
                    </li>
                ))}
            </ul>
        </div>
    );
});

export default BookList;
