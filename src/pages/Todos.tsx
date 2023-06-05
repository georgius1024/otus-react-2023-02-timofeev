import { ReactElement, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import type { Todo, User } from "@/types";
import { fetchTodos, addTodo, deleteTodo } from "@/services/todos";
import type { RootState } from '@/store'
import "@/pages/Todos.scss";

const TodosPage = (): ReactElement => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  if (!user) {
    return <Navigate to="/login" />
  }

  const [todos, setTodos] = useState<Todo[] | void>(undefined);
  useEffect(() => {
    user && fetchTodos(user).then((todos) => setTodos(todos));
  }, [user]);

  const todoAdded = async (input: Todo): Promise<void> => {
    const newTodo  = await addTodo(input);
    if (todos) {
      setTodos([...todos, newTodo]);
    } else {
      setTodos([newTodo]);
    }
  };
  const todoRemoved = async (input: Todo): Promise<void> => {
    await deleteTodo(input);
    todos && setTodos(todos.filter((e) => e.id !== input.id));
    alert("Item deleted");
  };
  if (typeof todos === "undefined") {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h1>Todos</h1>
      <TodoList todos={todos} onRemove={todoRemoved} />

      <TodoForm user={user} onAdd={todoAdded} />
    </div>
  );
};

export default TodosPage;
