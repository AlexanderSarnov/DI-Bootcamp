// server/models/bookModel.js

const pool = require('../config/db');

const getBooks = async () => {
  const result = await pool.query('SELECT * FROM books');
  return result.rows;
};

const getBookById = async (id) => {
  const result = await pool.query('SELECT * FROM books WHERE id = $1', [id]);
  return result.rows[0];
};

const createBook = async (title, author, publishedYear) => {
  const result = await pool.query('INSERT INTO books (title, author, publishedYear) VALUES ($1, $2, $3) RETURNING *', [title, author, publishedYear]);
  return result.rows[0];
};

const updateBook = async (id, title, author, publishedYear) => {
  const result = await pool.query('UPDATE books SET title = $1, author = $2, publishedYear = $3 WHERE id = $4 RETURNING *', [title, author, publishedYear, id]);
  return result.rows[0];
};

const deleteBook = async (id) => {
  await pool.query('DELETE FROM books WHERE id = $1', [id]);
};

module.exports = {
    getBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook,
};
