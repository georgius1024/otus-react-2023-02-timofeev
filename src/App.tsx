import { useEffect, ReactElement } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";

import { restoreState } from "@/store/actions";

import "@/App.scss";
import Layout from "@/components/Layout";
import Login from "@/pages/Login";
import Forgot from "@/pages/Forgot";
import Register from "@/pages/Register";
import Todos from "@/pages/Todos";
import TodoPage from "@/pages/TodoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Todos />
      </Layout>
    ),
  },
  {
    path: "/:id",
    element: (
      <Layout>
        <TodoPage />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
  {
    path: "/register",
    element: (
      <Layout>
        <Register />
      </Layout>
    ),
  },
  {
    path: "/forgot",
    element: (
      <Layout>
        <Forgot />
      </Layout>
    ),
  },
]);

function App(): ReactElement {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restoreState());
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
