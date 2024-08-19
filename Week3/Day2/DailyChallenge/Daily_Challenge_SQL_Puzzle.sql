-- CREATE TABLE FirstTab (
--      id integer, 
--      name VARCHAR(10)
-- )

-- INSERT INTO FirstTab VALUES
-- (5,'Pawan'),
-- (6,'Sharlee'),
-- (7,'Krish'),
-- (NULL,'Avtaar')

-- SELECT * FROM FirstTab

-- CREATE TABLE SecondTab (
--     id integer 
-- )

-- INSERT INTO SecondTab VALUES
-- (5),
-- (NULL)

-- SELECT * FROM SecondTab

-- Q1. What will be the OUTPUT of the following statement?

-- SELECT COUNT(*) 
-- FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL ) -- Output: count='0'
-- No id value in FirstTab can be "not equal to" NULL so the condition always evaluates to False thus no rows are counted.

-- -- Q2. What will be the OUTPUT of the following statement?

-- SELECT COUNT(*) 
-- FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 ) -- Output: count='2'
-- This query checks for id values not equal to a specific value (5) that exists in SecondTab. This leads to a count of 2 (id=6 and id=7 from FirstTab).

-- -- Q3. What will be the OUTPUT of the following statement?

-- SELECT COUNT(*) 
-- FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab ) -- Output: 0 (I mistakenly assumed it could be 1)
-- -- NULL is not a value: 
-- 	It represents an unknown or missing value.
-- -- Comparisons with NULL always result in NULL: 
-- 	Any comparison involving NULL, 
-- 	whether it's =, <>, <, >, IN, or NOT IN, evaluates to NULL.
-- -- NULL in WHERE clause: 
-- 	A WHERE clause generally filters rows based on true conditions. 
-- 	Since a comparison with NULL always results in NULL, 
-- 	which is treated as unknown, no rows are returned.

-- -- Q4. What will be the OUTPUT of the following statement?

-- SELECT COUNT(*) 
-- FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL ) -- Output: 2
-- counts elements from FirstTab which id is not 5 (same as Q2 or the following query)

-- SELECT COUNT(*) 
-- FROM FirstTab WHERE id != 5 -- equivalent to the Q4 query.
