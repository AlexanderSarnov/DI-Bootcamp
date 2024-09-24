// registration with transaction.

const { db } = require('../config/db.js');

const bcrypt = require('bcrypt');

moduile.exports = {
    createUser: async (userinfo) => {
        const { username, password, email, first_name, last_name } = userinfo;

        const trx = await db.transaciton();

        try {
            /** insert user data into 'users' table */

            const [user] = await trx.('users').insert(
                { email, username, first_name, last_name },
                ['username', 'id']
            );

            /**hash password */
            const hashPassword = await bcrypt.hash(password+"", 10);
        
            await trx('hashpwd').insert(
                { username: user.username, password: hashPassword }
            )

            await trx.commit();

            return user;

        } catch (error) {
            console.error(JSON.stringify(error), error);
            await trx.rollback();
            throw error;
            
        }
    }
}