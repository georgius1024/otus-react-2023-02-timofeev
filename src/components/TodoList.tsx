import { PureComponent } from "react";
import { Link } from "react-router-dom";

import type { Todo } from "@/types";
type TodoListProps = {
  todos: Todo[] | null;
  onRemove: (todo: Todo) => void;
};

type TodoListState = {};

class TodoList extends PureComponent<TodoListProps, TodoListState> {
  constructor(props: TodoListProps) {
    super(props);
  }
  render() {
    if (this.props.todos) {
      return (
        <ul className="todos">
          {this.props.todos.map((todo) => (
            <li key={todo.id} className={todo.completed ? 'completed' : 'incompleted'}>
              <span className="remover" onClick={() => this.props.onRemove(todo)}>&times;</span>
              <Link to={`/${todo.id}`}>
              {todo.name}
              </Link>
            </li>
          ))}
        </ul>
      );
    } else {
      return <div>Loading</div>;
    }
  }
}

export default TodoList;
