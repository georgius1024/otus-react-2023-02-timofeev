import { useState, ReactElement } from "react";
import { useSelector } from "react-redux";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import "@/App.scss";
import Layout from "@/components/Layout";
import Login from "@/pages/Login";
import Forgot from "@/pages/Forgot";
import Register from "@/pages/Register";
import Todos from "@/pages/Todos";
import TodoPage from "@/pages/TodoPage";
import type { RootState } from "@/store";

function App(): ReactElement {
  const user = useSelector((state: RootState) => state.auth.user);

  const router = createBrowserRouter([
    {
      path: "/",
      element: user ? (
        <Layout>
          <Todos />
        </Layout>
      ) : (
        <Navigate to="/login" />
      ),
    },
    {
      path: "/:id",
      element: user ? (
        <Layout>
          <TodoPage />
        </Layout>
      ) : (
        <Navigate to="/login" />
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

  return <RouterProvider router={router} />;
}

export default App;
