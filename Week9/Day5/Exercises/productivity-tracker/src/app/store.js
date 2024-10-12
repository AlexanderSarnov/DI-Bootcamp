// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../features/state/slice';

const store = configureStore({
    reducer: rootReducer, // Import the root reducer from the features state slice
});

export default store;
