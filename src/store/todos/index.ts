import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { TodosState } from "@/store/todos/types";
import reducers from "@/store/todos/reducers";
import thunks from "@/store/todos/thunks";

const initialState: TodosState = {
  todos: null,
  busy: false,
};

export const todosSlice = createSlice({
  name: "store/todos",
  initialState,
  reducers,
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      // Add user to the state array
      state.entities.push(action.payload)
    })
  },  
});

export const {  } = todosSlice.actions;

export default todosSlice.reducer;
