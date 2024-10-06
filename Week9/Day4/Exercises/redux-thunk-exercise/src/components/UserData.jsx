// src/components/UserData.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserData } from '../features/userActions';

const UserData = () => {
    const [userId, setUserId] = useState(1);
    const dispatch = useDispatch();
    const { user, loading, error } = useSelector((state) => state.user);

    const handleInputChange = (e) => {
        setUserId(e.target.value);
    };

    const handleFetchUser = () => {
        dispatch(fetchUserData(userId));
    };

    return (
        <div>
            <h1>User Data</h1>
            <input type="number" value={userId} onChange={handleInputChange} placeholder="Enter user ID" />
            <button onClick={handleFetchUser}>Fetch User</button>
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {user && !loading && !error && (
                <div>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                </div>
            )}
        </div>
    );
};

export default UserData;
