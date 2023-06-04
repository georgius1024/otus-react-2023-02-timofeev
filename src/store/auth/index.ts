import { createSlice } from "@reduxjs/toolkit";
import type { AuthState } from "@/store/auth/types";
import reducers from "@/store/auth/reducers";

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: "store/auth",
  initialState,
  reducers
});

export const { login, logout, store, restore } = authSlice.actions;

export default authSlice.reducer;
