import type { Todo, User } from "@/types";
import {
  collection,
  doc,
  addDoc,
  updateDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { db } from "@/firebase";

export async function fetchTodos(user: User): Promise<Todo[]> {
  const todosRef = collection(db, "todos");
  const response = await getDocs(query(todosRef,
    where("uid", "==", user.uid),
    where("completed", "==", false),
  ));
  return response.docs.map((e) => ({ ...(e.data() as Todo), id: e.id }));
}

export async function addTodo(todo: Todo): Promise<Todo> {
  return addDoc(collection(db, "todos"), todo).then(({ id }) => ({ ...todo, id }))
}

export async function completeTodo(todo: Todo): Promise<void> {
  if (!todo?.id) return
  return updateDoc(doc(db, "todos", todo.id), {...todo, completed: false})
}