import { Component, KeyboardEvent } from "react";

import type { Todo, User } from "@/types";
type TodoProps = {
  user: User;
  onAdd: (todo: Todo) => void;
};

type TodoState = {
  name: string;
};

class TodoForm extends Component<TodoProps, TodoState> {
  state: TodoState = {
    name: "",
  };
  constructor(props: TodoProps) {
    super(props);
  }
  onClick = (event: KeyboardEvent<Document>): void => {
    if (event.key === "Escape") {
      event.preventDefault();
      this.setState({ name: "" });
    }
    if (event.key === "Enter") {
      event.preventDefault();
      this.submit(null);
    }
  };
  componentDidMount(): void {
    // @ts-ignore
    document.addEventListener("keydown", this.onClick);
  }
  componentWillUnmount() {
    // @ts-ignore
    document.removeEventListener("keydown", this.onClick);
  }
  componentDidUpdate(prevProps: Readonly<TodoProps>, prevState: Readonly<TodoState>, snapshot?: any): void {
    if (prevProps.user !== this.props.user) {
      console.log('user updated - need to fetch something')
    }
  }
  shouldComponentUpdate(nextProps: Readonly<TodoProps>, nextState: Readonly<TodoState>, nextContext: any): boolean {
    if (nextProps.user !== this.props.user) {
      return true
    }
    if (nextState.name !== this.state.name) {
      return true
    }
    return false
  }
  setName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ name: event.target.value });
  };
  submit = (event: React.MouseEvent<HTMLButtonElement> | null): void => {
    event?.preventDefault();
    this.props.onAdd({
      name: this.state.name,
      completed: false,
      uid: this.props.user.uid || "",
    });
    this.setState({ name: "" });
  };
  render() {
    return (
      <form name="add" className="grid">
        <div>
          <input
            value={this.state.name}
            type="todo"
            name="name"
            onInput={this.setName}
          />
        </div>
        <div>
          <button type="button" onClick={this.submit}>
            Add
          </button>
        </div>
      </form>
    );
  }
}

export default TodoForm;
