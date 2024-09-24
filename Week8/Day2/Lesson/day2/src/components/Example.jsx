import { useState, useEffect } from 'react';

const Example = (props) => {
    const [users, setUsers] = useState([]);
    const [text, setText] = useState('');
    // const [state, setState] = useState();

    useEffect(() => {
        console.log('useEffect was called');
        getUsers();
    }, [text, props.num]);

    useEffect(() => {}, []);

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const filtered = users.filter((user) => {
        return user.name.toLowerCase().includes(text.toLowerCase());
    });

    const getUsers = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log('Data:', data);
            setUsers(data);
            // this.users = data;
            // console.log('Users:', this.users);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <h2>{props.num}. Example of Fucntion Component</h2>
            <button onClick={getUsers}>Get Users</button>
            <div>
                <input placeholder="Search..." onChange={(e) => handleChange(e)} />
            </div>
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                    </div>
                );
            })}
        </>
    );
};

export default Example;

/**
 * hooks
 *
 * -> functions
 */
