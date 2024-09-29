import React, { createContext, useContext, useReducer } from 'react';

const TaskContext = createContext();

const initialState = {
    tasks: [],
    filter: 'all',
};

const ADD_TASK = 'ADD_TASK';
const REMOVE_TASK = 'REMOVE_TASK';
const EDIT_TASK = 'EDIT_TASK';
const TOGGLE_TASK = 'TOGGLE_TASK';
const FILTER_TASKS = 'FILTER_TASKS';

const taskReducer = (state, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, { id: Date.now(), text: action.text, completed: false }],
            };
        case REMOVE_TASK:
            return {
                tasks: state.tasks.filter((task) => task.id !== action.id),
            };
        case EDIT_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task) => (task.id === action.id ? { ...task, text: action.text } : task)),
            };
        case TOGGLE_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.id ? { ...task, completed: !task.completed } : task
                ),
            };
        case FILTER_TASKS:
            return {
                ...state,
                filter: action.filter,
            };
        default:
            throw new Error('Invalid action type');
    }
};

function TaskProvider({ children }) {
    const [state, dispatch] = useReducer(taskReducer, initialState);

    return <TaskContext.Provider value={{ state, dispatch }}>{children}</TaskContext.Provider>;
}

function useTask() {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTask must be used within a TaskProvider');
    }
    return context;
}

export { TaskProvider, useTask, ADD_TASK, REMOVE_TASK, EDIT_TASK, TOGGLE_TASK, FILTER_TASKS };
