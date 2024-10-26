// initDb.js
// !Run to populate db with test sample data

const pool = require('./server/config/db');

const initializeDb = async () => {
    try {
        await pool.query(`
      CREATE TABLE IF NOT EXISTS books (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        author VARCHAR(255) NOT NULL,
        publishedYear INT NOT NULL
      )
    `);

        await pool.query(`
      INSERT INTO books (title, author, publishedYear) VALUES
      ('1984', 'George Orwell', 1949),
      ('To Kill a Mockingbird', 'Harper Lee', 1960),
      ('The Great Gatsby', 'F. Scott Fitzgerald', 1925)
    `);

        console.log('Database initialized with sample data');
        process.exit(0);
    } catch (err) {
        console.error('Error initializing database', err);
        process.exit(1);
    }
};

initializeDb();
