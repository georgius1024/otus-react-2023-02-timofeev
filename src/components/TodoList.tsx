import { Component } from "react";

import type { Todo } from "@/types";
type TodoListProps = {
  todos: Todo[] | null
  // onChange: (todo: Todo) => void
};

type TodoListState = {
}

class TodoList extends Component<TodoListProps, TodoListState> {
  constructor(props: TodoListProps) {
    super(props);
    this.setToggleCompleted = this.setToggleCompleted.bind(this);
  }
  setToggleCompleted(event: React.ChangeEvent<HTMLInputElement>): void {
  }
  render() {
    if (this.props.todos) {
      return (
        <ul>
          {this.props.todos.map(todo => {
            return (
              <li key={todo.id}>{todo.name}</li>
            )
          })}
        </ul>
      );
    }
    else {
      return <div>Loading</div>
    }
  }
}

export default TodoList;
