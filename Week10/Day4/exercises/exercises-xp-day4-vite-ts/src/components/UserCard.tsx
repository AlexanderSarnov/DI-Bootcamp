import React from 'react';

// Define the interface for the component's props with optional filds
interface UserCardProps {
    name?: string;
    age?: number;
}

// Create the function
const UserCard: React.FC<UserCardProps> = ({ name, age }) => {
    return (
        <div
            style={{
                border: '1px solid #ccc',
                margin: '20px',
                padding: '16px',
                borderRadius: '10px',
                backgroundColor: 'rgb(45,45,45)',
            }}>
            <h2>User Card</h2>
            <p>Name: {name ? name : 'Name is N/A'}</p>
            <p>Age: {age ? age : 'Age is N/A'}</p>
        </div>
    );
};

// Export the component
export default UserCard;
