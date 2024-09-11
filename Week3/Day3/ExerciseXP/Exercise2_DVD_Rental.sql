-- Exercise 2 : DVD Rental
-- Instructions
-- Use UPDATE to change the language of some films. Make sure that you use valid languages.
-- UPDATE film
-- SET language_id = '1'
-- WHERE language_id = (
-- 	SELECT language_id 
-- 	FROM language
-- 	WHERE name = 'English'); 

-- Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
-- customer_address_id_fkey - is the only foreign key 
-- The customer_address_id_fkey foreign key in the customer table 
-- serves the purpose of connecting customer records 
-- to their corresponding address details in the address table.

-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
-- DROP TABLE customer_review;

-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
-- SELECT COUNT(*) AS outstanding_rentals
-- FROM rental
-- WHERE return_date IS NULL;

-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
-- SELECT f.title, f.rental_rate
-- FROM rental r
-- JOIN film f ON r.inventory_id = f.film_id
-- WHERE r.return_date IS NULL
-- ORDER BY f.rental_rate DESC
-- LIMIT 30;

-- Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
-- SELECT 
-- 	f.film_id, 
-- 	f.title, 
-- 	f.description, 
-- 	rental_rate
-- FROM film f
-- JOIN film_actor fa ON f.film_id = fa.film_id
-- JOIN actor a ON fa.actor_id = a.actor_id
-- WHERE a.first_name = 'Penelope' 
-- 	AND a.last_name = 'Monroe'
-- 	AND f.description ILIKE '%sumo%'; -- Output: "Park Citizen"

-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.
-- SELECT 
-- 	film_id,
-- 	title, 
-- 	length, 
-- 	rating,
-- 	rental_rate
-- FROM film
-- WHERE length < 60
-- 	AND rating = 'R';

-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.
-- SELECT 
-- 	f.film_id, 
-- 	f.title, 
-- 	f.description, 
-- 	f.rental_rate, 
-- 	f.rating
-- 	FROM film f
-- JOIN inventory i ON f.film_id = i.film_id
-- JOIN rental r ON i.inventory_id = r.inventory_id
-- JOIN customer c ON r.customer_id = c.customer_id
-- 	WHERE c.first_name = 'Matthew' 
-- 	AND c.last_name = 'Mahan' 
-- 	AND r.return_date 
-- 	BETWEEN '2005-07-28 00:00:00' AND '2005-08-01 00:00:00'
-- 	AND f.rental_rate > 4.00

-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.
-- SELECT 
-- 	f.title, 
-- 	f.replacement_cost, 
-- 	f.description
-- FROM film f
-- JOIN inventory i ON f.film_id = i.film_id
-- JOIN rental r ON i.inventory_id = r.inventory_id
-- JOIN customer c ON r.customer_id = c.customer_id
-- WHERE 
-- 	c.first_name = 'Matthew' 
-- 	AND c.last_name = 'Mahan'
-- 	AND (f.title ILIKE '%boat%' 
-- 	OR f.description ILIKE '%boat%')
-- GROUP BY 
-- 	f.title, 
-- 	f.replacement_cost, 
-- 	f.description
-- ORDER BY f.replacement_cost DESC; -- I can limit the result but I can't say for sure what is very exepsive DVD to replace, so I leave it to the shop representative
