// src/app/store.js

import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../features/task/taskSlice.js';

const store = configureStore({
    reducer: {
        task: taskReducer,
    },
});

export default store;
