import { Component } from "react";
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import type { Todo, User } from "@/types";
import { fetchTodos, addTodo} from '@/services/todos'
type TodoPageProps = {
  user: User;
};
type TodoPageState = {
  todos: Todo[];
};

class TodosPage extends Component<TodoPageProps, TodoPageState> {
  state: TodoPageState = {
    todos: []
  }
  constructor(props: TodoPageProps) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
  }
  componentDidMount() {
    fetchTodos(this.props.user).then(todos => this.setState({ todos }))
  }
  async addTodo(input: Todo) {
    const newTodo = await addTodo(input)
    this.setState(state => {
      return {
        ...state,
        todos: [...state.todos, newTodo]
      }
    })
  }
  render() {
    return (
      <>
        <h1>Todos</h1>
        <TodoList todos={this.state.todos}/>
        
        <TodoForm user={this.props.user} onAdd={this.addTodo} />
      </>
    );
  }
}

export default TodosPage;
