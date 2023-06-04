import {
  createAsyncThunk,
  createAction,
  ActionReducerMapBuilder,
  PayloadAction,
} from "@reduxjs/toolkit";
import type { TodosState } from "@/store/todos/types";
import type { Todo, User } from "@/types";
import { fetchTodos, fetchTodo } from "@/services/todos";

export const fetchAll = createAsyncThunk(
  "todos/fetchAll",
  async (user: User) => {
    return await fetchTodos(user);
  }
);

export const fetchOne = createAsyncThunk(
  "todos/fetchOne",
  async ({ user, id }) => {
    return await fetchTodo(user, id);
  }
);

export default function (builder: ActionReducerMapBuilder<TodosState>) {
  builder
  .addCase(fetchAll.pending, (state: TodosState) => {
    state.busy = true;
  })
  .addCase(fetchAll.pending, (state: TodosState, action: PayloadAction) => {
    state.busy = false;
    state.todos = action.payload as unknown as Todo[]
  })
  .addCase(fetchAll.rejected, (state: TodosState, action) => {
    state.busy = false;
    state.todos = null
  });
}
