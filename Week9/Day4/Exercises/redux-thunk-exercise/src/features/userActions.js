// src/features/userActions.js
// src/features/userActions.js
import axios from 'axios';
import { fetchUserStart, fetchUserSuccess, fetchUserFailure } from './userSlice';

// Thunk action creator to fetch user data
export const fetchUserData = (userId) => async (dispatch) => {
    dispatch(fetchUserStart());
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        dispatch(fetchUserSuccess(response.data));
    } catch (error) {
        dispatch(fetchUserFailure(error.message));
    }
};
