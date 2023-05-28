import { PureComponent } from "react";
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import type { Todo, User } from "@/types";
import { fetchTodos, addTodo, completeTodo } from "@/services/todos";
type TodoPageProps = {
  user: User;
};
type TodoPageState = {
  todos: Todo[];
};

class TodosPage extends PureComponent<TodoPageProps, TodoPageState> {
  state: TodoPageState = {
    todos: [],
  };
  constructor(props: TodoPageProps) {
    super(props);
  }
  componentDidMount() {
    fetchTodos(this.props.user).then((todos) => this.setState({ todos }));
  }
  addTodo = async (input: Todo): Promise<void> => {
    const newTodo = await addTodo(input);
    this.setState((state) => {
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    });
  };
  completed = async (input: Todo): Promise<void> => {
    await completeTodo(input);
    this.setState((state) => {
      return {
        ...state,
        todos: state.todos.filter((e) => e.id !== input.id),
      };
    });
    alert("Item deleted");
  };
  render = () => (
    <>
      <h1>Todos</h1>
      <TodoList todos={this.state.todos} onCompleted={this.completed} />

      <TodoForm user={this.props.user} onAdd={this.addTodo} />
    </>
  );
}

export default TodosPage;
