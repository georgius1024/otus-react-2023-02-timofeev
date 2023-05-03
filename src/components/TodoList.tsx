import { PureComponent } from "react";

import type { Todo } from "@/types";
type TodoListProps = {
  todos: Todo[] | null
  onCompleted: (todo: Todo) => void
};

type TodoListState = {
}

class TodoList extends PureComponent<TodoListProps, TodoListState> {
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
              <li onClick={() => this.props.onCompleted(todo)} key={todo.id}>{todo.name}</li>
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
