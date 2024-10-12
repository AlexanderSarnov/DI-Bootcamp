// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/state/slice';
import usersReducer from '../features/users/state/slice';

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer,
    },
});
