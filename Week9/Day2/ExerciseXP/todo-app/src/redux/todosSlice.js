import { createSlice } from '@reduxjs/toolkit';

// A slice is a collection of Redux reducer logic and actions for a single feature of an app.

const todosSlice = createSlice({
    name: 'todos', // The name of the slice, which will be used as a prefix for the action types.
    initialState: [],

    // reducers: {} --> An object containing the reducer functions for handling different actions. Each function takes the current state and an action as arguments and returns the new state.
    reducers: {
        addTodo: (state, action) => {
            state.push({ id: Date.now(), text: action.payload, completed: false });
        },
        toggleTodo: (state, action) => {
            const todo = state.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        removeTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload);
        },
    },
});

export const { addTodo, removeTodo, toggleTodo } = todosSlice.actions; // export actions
export default todosSlice.reducer; // export reducer function
