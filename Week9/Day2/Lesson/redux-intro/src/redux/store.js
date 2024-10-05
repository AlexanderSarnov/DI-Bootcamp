// import { createStore, combineReducers } from 'redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { counterReducer } from './reducers';
import { textReducer } from './textReducer';

// const reducer = combineReducers({counterReducer, usersReducer, etc...}

const appReducer = combineReducers({ counterReducer, textReducer }); // best practice is to user combnineReducers, not by using it inside the store function.

// const store = createStore(reducer);

const store = configureStore({
    reducer: appReducer, // shorthand for key-value when they are the same
});

export default store;
