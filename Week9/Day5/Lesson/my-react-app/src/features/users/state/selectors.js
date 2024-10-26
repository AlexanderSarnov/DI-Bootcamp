import { createSelector } from "@reduxjs/toolkit";
import { state, selectedAuthor } from './slice';

export const selectUsers = createSelector([state], (state) => state.users);

export const selectAuthor = createSelector([state], (state) => state.author);