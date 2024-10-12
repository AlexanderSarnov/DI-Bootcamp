import { createSelector } from "@reduxjs/toolkit";

import { state, posts } from "./slice";
import { author } from "../../users/state/slice";

export const selectPosts = createSelector([posts, author], (posts, author) => {
  if (author == -1) return posts;
  return posts.filter((post) => post.userId == author);
});

export const selectStatus = createSelector([state], (state) => state.status);
