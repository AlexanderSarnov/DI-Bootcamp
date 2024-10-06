// src/features/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

// initial state for user data
const initialState = {
    user: {},
    loading: false,
    error: null,
};

// create a slice for user data
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetchUserStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchUserSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
        },
        fetchUserFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

// export actions and reducer
export const { fetchUserStart, fetchUserSuccess, fetchUserFailure } = userSlice.actions;

export default userSlice.reducer;
