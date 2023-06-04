import type { User } from "@/types";
import type { AuthState } from "@/store/auth/types";
import type { PayloadAction } from "@reduxjs/toolkit";

export default {
  login: (state: AuthState, action: PayloadAction<User>) => {
    state.user = action.payload;
  },
  logout: (state: AuthState) => {
    state.user = null;
  },
  store: (state: AuthState) => {
    localStorage["store/auth"] = JSON.stringify(state);
  },
  restore: (state: AuthState) => {
    if ("store/auth" in localStorage) {
      try {
        state = JSON.parse(localStorage["store/auth"]);
      } catch (error) {
        console.error(error);
      }
    }
  },
};
