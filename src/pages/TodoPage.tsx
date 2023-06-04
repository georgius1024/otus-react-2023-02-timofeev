import { ReactElement, useEffect, useState } from "react";
import type { Todo, User } from "@/types";
import { useParams, Link, useNavigate } from "react-router-dom";
import { fetchTodo, updateTodo } from "@/services/todos";
import "@/pages/TodoPage.scss";
type TodoPageProps = {
  user: User;
};

const TodoPage = (props: TodoPageProps): ReactElement => {
  const navigate = useNavigate();
  const { id = "" } = useParams();
  const [todo, setTodo] = useState<Todo | null | void>(undefined);
  useEffect(() => {
    fetchTodo(props.user, id).then(setTodo);
  }, [props.user, id]);

  const setName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, name: event.target.value } as Todo);
  };
  const setChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, completed: event.target.checked } as Todo);
  };

  const saveTodo = () => {
    todo && updateTodo(todo).then(() => navigate("/"));
  };
  if (typeof todo === "undefined") {
    return <p>Loading...</p>;
  }
  if (!todo) {
    return <p>Not found</p>;
  }
  return (
    <div className="todo">
      <h1>Todo page</h1>
      <label>
        Todo:
        <input value={todo.name} type="todo" name="name" onInput={setName} />
      </label>
      <label>
        <input type="checkbox" checked={todo.completed} onChange={setChecked} />{" "}
        Completed
      </label>
      <hr />
      <div className="actions">
        <span role="button" className="primary" onClick={saveTodo}>
          Save
        </span>
        <Link role="button" className="outline" to="/">
          Back
        </Link>
      </div>
    </div>
  );
};

export default TodoPage;
