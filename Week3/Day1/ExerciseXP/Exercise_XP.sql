-- ADDING DATA FROM THE EXERCISE:

-- CREATE TABLE items (
-- 	index SERIAL PRIMARY KEY,
-- 	item_name VARCHAR (255) NOT NULL,
-- 	item_price DECIMAL (10,2) NOT NULL

-- );

-- INSERT INTO items (index, item_name, item_price)
-- 	VALUES
-- 	(1, 'Small Desk', 100),
-- 	(2, 'Large Desk', 300),
-- 	(3, 'Fan', 80);


-- CREATE TABLE customers (
-- 	index SERIAL PRIMARY KEY,
-- 	customer_name VARCHAR (255) NOT NULL,
-- 	customer_last_name VARCHAR (255) NOT NULL

-- );

-- INSERT INTO customers (index, customer_name, customer_last_name)
-- 	VALUES
-- 	(1, 'Greg', 'Jones'),
-- 	(2, 'Sandra', 'Jones'),
-- 	(3, 'Scott', 'Scott'),
-- 	(4, 'Trevor', 'Green'),
-- 	(5, 'Melanie', 'Jonson');


-- -- USING SQL TO FETCH DATA FROM THE DATABASE:

-- -- 1. Select all the items:
-- SELECT * FROM customers;

-- -- 2. Select all the items with a price above 80 (80 not included).
-- SELECT * FROM items WHERE item_price > 80;

-- -- 3. Select all the items with a price below 300. (300 included).
-- SELECT * FROM items WHERE item_price <= 300;

-- -- 4. Select all customers whose last name is ‘Smith’ (Q:"What will be your outcome?"" - A:"table fields only").
-- SELECT * FROM customers WHERE customer_last_name = 'Smith';

-- -- 5. Select all customers whose last name is ‘Jones’.
-- SELECT * FROM customers WHERE customer_last_name = 'Jones';

-- -- 6. Select all customers whose firstname is not ‘Scott’.
-- SELECT * FROM customers WHERE customer_name <> 'Jones';
-- SELECT * FROM customers WHERE NOT customer_name = 'Jones';
