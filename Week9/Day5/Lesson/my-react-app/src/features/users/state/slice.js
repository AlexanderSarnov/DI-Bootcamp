// src/features/posts/state/slice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const USER_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get(USER_URL);
    return response.data;
});

const initialState = {
    users: [],
    author: -1,
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        selectedAuthor: (state, action) => {
            state.author = action.payload;
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        });
    },
});

export const state = (state) => state.users;
export const author = (state) => state.author;

export const { selectedAuthor } = usersSlice.actions;
export default usersSlice.reducer;
