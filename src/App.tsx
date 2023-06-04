import { useState, ReactElement, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import "@/App.scss";
import LayoutBuilder from "@/components/Layout";
import Login from "@/pages/Login";
import Forgot from "@/pages/Forgot";
import Register from "@/pages/Register";
import Todos from "@/pages/Todos";

import type { User, Logout } from "@/types";

function App(): ReactElement {
  const [user, userLogin] = useState<User | null>(null);
  const redirect = (url: string) => {
    window.history.pushState({}, "", url);
  };

  const logout = (): void => {
    userLogin(null);
    redirect("/login");
  };
  const login = (user: User): void => {
    userLogin(user);
    redirect("/");
  };

  const register = (user: User): void => {
    userLogin(user);
    redirect("/");
  };

  const Layout = LayoutBuilder(user, logout);

  const router = createBrowserRouter([
    {
      path: "/",
      element: user ? (
        <Layout>
          <Todos user={user} />
        </Layout>
      ) : (
        <Navigate to="/login" />
      ),
    },
    {
      path: "/login",
      element: (
        <Layout>
          <Login login={login} />
        </Layout>
      ),
    },
    {
      path: "/register",
      element: (
        <Layout>
          <Register register={register} />
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
