import { getUsers } from './info.js';

async function main(url) {
    try {
        const users = await getUsers(url);
        console.log('Users:', users);
    } catch (error) {
        console.error('Error:', error);
    }
}

main('https://jsonplaceholder.typicode.com/users');
