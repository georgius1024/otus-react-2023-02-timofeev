import type { AuthState } from "@/store/auth/types";

export default {
  logout: (state: AuthState) => {
    state.user = undefined;
  },
  store: (state: AuthState) => {
    localStorage["store/auth"] = JSON.stringify(state);
  },
  restore: (state: AuthState) => {
    if ("store/auth" in localStorage) {
      try {
        state = JSON.parse(localStorage["store/auth"]);
        state.busy = undefined
        state.error = undefined
      } catch (error) {
        console.error(error);
      }
    }
  },
};
