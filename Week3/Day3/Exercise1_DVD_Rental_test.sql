-- Exercise 1: DVD Rental
-- Instructions
-- Get a list of all the languages, from the language table.
-- SELECT * FROM language;

-- Get a list of all films joined with their languages – select the following details : film title, description, and language name.
-- SELECT 
-- 	f.title, 
-- 	f.description, 
-- 	l.name
-- FROM film f
-- JOIN language l ON f.language_id = l.language_id;

-- Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.
-- SELECT
--   f.title,
--   f.description,
--   l.name AS language_name
-- FROM
--   language l
-- LEFT JOIN film f
-- ON l.language_id = f.language_id
-- 	ORDER BY l.name DESC 
-- 	limit 10;

-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.
-- CREATE TABLE new_film (
--   new_film_id SERIAL PRIMARY KEY,
--   new_film_name VARCHAR(50) NOT NULL
-- );

-- INSERT INTO new_film (new_film_name)
-- VALUES
--   ('Martial Arts of Nemesis'),
--   ('Do not be a menace');

-- Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.

-- CREATE TABLE customer_review (
--     review_id SERIAL PRIMARY KEY,
--     film_id INTEGER REFERENCES new_film(new_film_id) ON DELETE CASCADE,
--     language_id INTEGER REFERENCES language(language_id),
--     title VARCHAR(50),
