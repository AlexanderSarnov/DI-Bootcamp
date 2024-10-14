import React, { useState, useEffect } from 'react';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

// Define DataFetcher
const DataFetcher: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Fetched Users</h1>
            <div style={{ display: 'grid', gap: '16px' }}>
                {users.map((user) => (
                    <div
                        key={user.id}
                        style={{
                            border: '1px solid #ccc',
                            padding: '16px',
                            borderRadius: '10px',
                            backgroundColor: 'rgb(45,45,45)',
                        }}>
                        <h2>
                            {user.name} (@{user.username})
                        </h2>
                        <p>Email: {user.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DataFetcher;
