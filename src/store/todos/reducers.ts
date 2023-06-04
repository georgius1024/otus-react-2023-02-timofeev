import type { TodosState } from "@/store/todos/types";

export default {
  setBusy: (state: TodosState) => {
    state.busy = true;
  },
  clearBusy: (state: TodosState) => {
    state.busy = false;
  },
  store: (state: TodosState) => {
    localStorage["store/todos"] = JSON.stringify(state);
  },
  restore: (state: TodosState) => {
    if ("store/todos" in localStorage) {
      try {
        state = JSON.parse(localStorage["store/todos"]);
        state.busy = false;
      } catch (error) {
        console.error(error);
      }
    }
  },
};
