// src/features/state/slice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: [
        { id: 1, name: 'Task 1', categoryId: 1, completed: false },
        { id: 2, name: 'Task 2', categoryId: 1, completed: false },
        { id: 3, name: 'Task 3', categoryId: 2, completed: false },
        { id: 4, name: 'Task 4', categoryId: 2, completed: false },
    ],
    categories: [
        { id: 1, name: 'Work' },
        { id: 2, name: 'Personal' },
    ],
    selectedCategoryId: null, // Add selectedCategoryId to the initial state
};

const slice = createSlice({
    name: 'productivity',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        editTask: (state, action) => {
            const { id, name } = action.payload;
            const task = state.tasks.find((task) => task.id === id);
            if (task) {
                task.name = name;
            }
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },
        completeTask: (state, action) => {
            const { id, completed } = action.payload;
            const task = state.tasks.find((task) => task.id === id);
            if (task) {
                task.completed = completed;
            }
        },
        setSelectedCategory: (state, action) => {
            state.selectedCategoryId = action.payload;
        },
    },
});

export const { addTask, editTask, deleteTask, completeTask, setSelectedCategory } = slice.actions;
export default slice.reducer;
