import {
  createAsyncThunk,
  ActionReducerMapBuilder,
  PayloadAction,
} from "@reduxjs/toolkit";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "@/firebase";

import type { AuthState, AuthPayload } from "@/store/auth/types";
import type { User } from "@/types";

export const login = createAsyncThunk<User, AuthPayload, { rejectValue: string }>(
  "auth/login",
  async (payload: AuthPayload) => {
    return signInWithEmailAndPassword(
      auth,
      payload.email,
      payload.password
    ).then((userCredentials) => {
      const { uid, email, providerData } = userCredentials.user;
      return { uid, email, providerData } as User;
    });
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (payload: AuthPayload) => {
    return createUserWithEmailAndPassword(
      auth,
      payload.email,
      payload.password
    ).then((userCredentials) => {
      const { uid, email, providerData } = userCredentials.user;
      return { uid, email, providerData };
    });
  }
);

export const forgot = createAsyncThunk("auth/forgot", async (email: string) => {
  return sendPasswordResetEmail(auth, email);
});

export default function (builder: ActionReducerMapBuilder<AuthState>) {
  builder
    .addCase(login.pending, (state: AuthState) => {
      state.busy = true;
      state.user = undefined;
      state.error = undefined;
    })
    .addCase(login.fulfilled, (state: AuthState, action) => {
      state.busy = false;
      state.user = action.payload as unknown as User;
    })
    .addCase(login.rejected, (state: AuthState, action) => {
      state.busy = false;
      state.error = action.error.message;
    })
    .addCase(register.pending, (state: AuthState) => {
      state.busy = true;
      state.user = undefined;
      state.error = undefined;
    })
    .addCase(register.fulfilled, (state: AuthState, action) => {
      state.busy = false;
      state.user = action.payload as unknown as User;
    })
    .addCase(register.rejected, (state: AuthState, action) => {
      state.busy = false;
      state.error = action.error.message;
    })
    .addCase(forgot.pending, (state: AuthState) => {
      state.busy = true;
      state.error = undefined;
    })
    .addCase(forgot.fulfilled, (state: AuthState) => {
      state.busy = false;
    })
    .addCase(forgot.rejected, (state: AuthState, action) => {
      state.busy = false;
      state.error = action.error.message;
    });
}
