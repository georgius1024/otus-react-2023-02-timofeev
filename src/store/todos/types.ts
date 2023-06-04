import type { Todo } from "@/types";

export interface TodosState {
  todos: Todo[] | null;
  busy: boolean;
}
