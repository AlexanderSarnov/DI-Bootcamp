import { createSelector } from '@reduxjs/toolkit';

// Selector to get tasks by category
export const selectTasksByCategory = createSelector(
    (state) => state.tasks, // task from state
    (state, categoryId) => categoryId, // categoryId from args
    (tasks, categoryId) => tasks.filter((task) => task.categoryId === categoryId) // Result: filter tasks by categoryId
);

// Selector to get completed tasks count
export const selectCompletedTasks = createSelector(
    (state) => state.tasks, // task from state
    (tasks) => tasks.filter((task) => task.completed).length // Result: count completed tasks
);

// Selector to get category by ID
export const selectCategoryById = createSelector(
    (state) => state.categories, // categories from state
    (state, categoryId) => categoryId, // categoryId from args
    (categories, categoryId) => categories.find((category) => category.id === categoryId) // Result: find category by ID
);
