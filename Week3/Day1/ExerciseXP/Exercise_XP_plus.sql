-- DROP TABLE IF EXISTS students;

-- CREATE TABLE students (
--     id SERIAL PRIMARY KEY,
--     last_name VARCHAR(50) NOT NULL,
--     first_name VARCHAR(50) NOT NULL,
--     birth_date DATE NOT NULL
	
-- );

-- -- insert data into students table (using TO_DATE syntax for date conversion)
-- INSERT
-- INTO students (id, first_name, last_name, birth_date)
-- VALUES
-- (1, 'Marc', 'Benichou', TO_DATE(SUBSTRING('02/11/1998', -10), 'DD/MM/YYYY')),
-- (2, 'Yoan', 'Cohen', TO_DATE (SUBSTRING('03/12/2010',-10),'DD/MM/YYYY')),
-- (3, 'Lea',	'Benichou',	TO_DATE (SUBSTRING('27/07/1987',-10),'DD/MM/YYYY')),
-- (4, 'Amelia', 'Dux', TO_DATE (SUBSTRING('07/04/1996',-10),'DD/MM/YYYY')),
-- (5, 'David', 'Grez', TO_DATE (SUBSTRING('14/06/2003',-10),'DD/MM/YYYY')),
-- (6, 'Omer', 'Simpson',	TO_DATE (SUBSTRING('03/10/1980',-10),'DD/MM/YYYY'));

-- -- Insert your last_name, first_name and birth_date to the students table (Take a look at the id given).
-- INSERT
-- INTO students (id, first_name, last_name, birth_date)
-- VALUES (7, 'Alexander', 'Sarnov', '1987-12-11');

-- -- Fetch all of the data from the table.
-- SELECT *
-- FROM students;

-- -- Fetch all of the students first_names and last_names.
-- SELECT
-- 	first_name,
-- 	last_name
-- 	FROM students;

-- -- For the following questions, only fetch the first_names and last_names of the students.

-- -- Fetch the student which id is equal to 2.
-- SELECT first_name, last_name
-- FROM students
-- WHERE id = 2;

-- -- Fetch the student whose last_name is Benichou AND first_name is Marc.
-- SELECT first_name, last_name
-- FROM students
-- WHERE last_name = 'Benichou' AND first_name = 'Marc';

-- -- Fetch the students whose last_names are Benichou OR first_names are Marc.
-- SELECT first_name, last_name
-- FROM students
-- WHERE last_name = 'Benichou' OR first_name = 'Marc';
	
-- -- Fetch the students whose first_names contain the letter a.
-- SELECT first_name, last_name
-- FROM students
-- WHERE first_name LIKE '%a%';
	
-- -- Fetch the students whose first_names start with the letter a.
-- SELECT first_name, last_name
-- FROM students
-- WHERE first_name ILIKE 'a%';
	
-- -- Fetch the students whose first_names end with the letter a.
-- SELECT first_name, last_name
-- FROM students
-- WHERE first_name LIKE '%a';
	
-- -- Fetch the students whose second to last letter of their first_names are a (Example: Leah).
-- SELECT first_name, last_name
-- FROM students
-- WHERE first_name LIKE '%a_';

-- -- Fetch the students whose id’s are equal to 1 AND 3 .
-- SELECT first_name, last_name
-- FROM students
-- WHERE id IN (1, 3);

-- -- Fetch the students whose birth_dates are equal to or come after 1/01/2000. (show all their info).
-- SELECT *
-- FROM students
-- WHERE birth_date >= '2000-01-01';