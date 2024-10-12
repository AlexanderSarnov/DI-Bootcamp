import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(USERS_URL);
  return response.data;
});

const initialState = {
  users: [],
  author: -1,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    selectedAuthor: (state, action) => {
      state.author = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export const state = (state) => state.usersReducer;
export const author = (state) => state.usersReducer.author;

export const { selectedAuthor } = usersSlice.actions;
export default usersSlice.reducer;
