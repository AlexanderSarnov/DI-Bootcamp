// src/features/task/taskSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: {},
};

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const { day, task } = action.payload;
            if (!state.tasks[day]) {
                state.tasks[day] = [];
            }
            state.tasks[day].push(task);
        },
        editTask: (state, action) => {
            const { day, taskId, newTask } = action.payload;
            const tasksForDay = state.tasks[day];
            const taskIndex = tasksForDay.findIndex((task) => task.id === taskId);
            if (taskIndex !== -1) {
                tasksForDay[taskIndex] = newTask;
            }
        },
        deleteTask: (state, action) => {
            const { day, taskId } = action.payload;
            state.tasks[day] = state.tasks[day].filter((task) => task.id !== taskId);
        },
    },
});

export const { addTask, editTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
