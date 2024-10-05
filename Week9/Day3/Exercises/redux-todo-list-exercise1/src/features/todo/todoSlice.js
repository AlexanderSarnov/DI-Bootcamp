// src/features/todo/todoSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: [],
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => { // using current timestamp for generating unique id
            state.todos.push({ id: Date.now(), text: action.payload, completed: false });
        },
        toggleTodo: (state, action) => { // switching between completed and not completed depending on the current state of the task status
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
    },
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
