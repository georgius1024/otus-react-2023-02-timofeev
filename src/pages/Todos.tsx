import { PureComponent } from "react";
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import type { Todo, User } from "@/types";
import { fetchTodos, addTodo, deleteTodo } from "@/services/todos";
import "@/pages/Todos.scss";
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
  componentDidUpdate() {
    console.log("misterious useless action goes here...");
  }
  componentWillUnmout() {
    console.log("misterious useless action goes here...");
  }
  remove = async (input: Todo): Promise<void> => {
    await deleteTodo(input);
    this.setState((state) => {
      return {
        ...state,
        todos: state.todos.filter((e) => e.id !== input.id),
      };
    });
    alert("Item deleted");
  };
  render = () => (
    <div>
      <h1>Todos</h1>
      <TodoList todos={this.state.todos} onRemove={this.remove} />

      <TodoForm user={this.props.user} onAdd={this.addTodo} />
    </div>
  );
}

export default TodosPage;
