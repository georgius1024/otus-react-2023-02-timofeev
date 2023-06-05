import { PureComponent, KeyboardEvent } from "react";

import type { Todo, User } from "@/types";
type TodoProps = {
  user: User | undefined;
  onAdd: (todo: Todo) => void;
};

type TodoState = {
  name: string;
};

class TodoForm extends PureComponent<TodoProps, TodoState> {
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
  setName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ name: event.target.value });
  };
  submit = (event: React.MouseEvent<HTMLButtonElement> | null): void => {
    event?.preventDefault();
    this.props.onAdd({
      name: this.state.name,
      completed: false,
      uid: this.props?.user?.uid || "",
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
