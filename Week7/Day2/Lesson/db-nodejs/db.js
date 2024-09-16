const knex = require('knex');
const dotenv = require('dotenv');
dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT } = process.env;

const db = knex({
    client: 'pg',
    connection: {
        host: PGHOST,
        port: PGPORT,
        user: PGUSER,
        password: PGPASSWORD,
        database: PGDATABASE,
        ssl: {
            rejectUnauthorized: false,
        },
    },
});

// !Note: use copilot to explain it.

// async function getVersion() {
//     const result = await db.raw(`select version()`);
//     console.log(result.rows);
// }
// getVersion();

// db('products')
//     .select('name', 'id', 'price') // allows to specify the selections and control the order of appearance (left-to-right)
//     .orderBy('name') // allows to specify the order of appearance (top-to-bottom)
//     // .where('id', '=', 1)
//     // .where({ id: 1 })
//     // .where('id', 1)
//     // .select(*) // !Note: never use * for working with database.select - it is very inefficient
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.error(err);
//     });

// // * calls the query with metadata of the table
// db.raw('select id, name, price from products where id = ? and price = ?', [1, 100]) // optimized select with parameters "?".
//     .then((data) => {
//         console.log(data.rows);
//         // !Note: will only collect the data without metadata if .rows is added!
//     })
//     .catch((err) => {
//         console.error(err);
//     });

// db('products')
// .update({ name: 'Product 222' }, ['name', 'price', 'id'])
// .where({ id: 2 })
// .insert(
//     [
//         { name: 'Product 600', price: 600 },
//         { name: 'Product 700', price: 700 },
//     ],
//     ['id']
// ) // with the array added after the , - will return also the inserted line, thus we can return new entry id and save it for later use.
// .then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.error(err);
// });

//DeleteProduct
// db('products')
//     .where({ id: 3 })
//     .del() // delete record with id 3
//     .returning('id', 'name', 'price') // similar to adding an array after the object
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.error(err);
//     });

// !Note: all the above was with autocommit.

// * knex supports transactions. If an error occurs during a transaction, all changes will be rolled back.

// Transactions (trx)
const test = async () => {
    try {
        const trx = await db.transaction();
        const product1 = await db('products')
            .insert({ name: 'Product 3', price: 12345 }, ['id', 'name', 'price'])
            .returning('id')
            .transacting(trx); // to make it a transaction

        console.log('product1: ', product1);

        const product2 = await db('products')
            .insert({ name: 'Product 4', price: 2345 }, ['id', 'name', 'price'])
            // .returning('id')
            .transacting(trx); // to make it a transaction

        console.log('product2: ', product2);

        await trx.commit(); // commit
    } catch (error) {
        console.error(error);
        await trx.rollback(); // rollback
    }
};

test(); // to run in terminal "node exercise4.js"

// db.close(); // to stop the connection
