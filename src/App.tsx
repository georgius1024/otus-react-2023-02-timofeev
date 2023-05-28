import { useState, ReactElement } from "react";
import "@/App.scss";
import LayoutBuilder from "@/components/Layout";
import Login from "@/components/Login";
import Forgot from "@/components/Forgot";
import Register from "@/components/Register";
import Todos from "@/components/Todos";
import type { User, Logout } from "@/types";
import { Page } from "@/types";

function App(): ReactElement {
  const [page, navigate] = useState<Page>(Page.login);
  const [user, userLogin] = useState<User | null>(null);
  const logout = () => {
    userLogin(null);
    navigate(Page.login);
  };

  const Layout = LayoutBuilder(page, user, logout, navigate);
  switch (page) {
    case Page.home:
    default:
      if (user) {
        return (
          <Layout>
            <Todos user={user} />
          </Layout>
        );
      } else {
        return <Layout>No page selected</Layout>;
      }
    case Page.login:
      return (
        <Layout>
          <Login navigate={navigate} login={(user) => userLogin(user)} />
        </Layout>
      );
    case Page.forgot:
      return (
        <Layout>
          <Forgot navigate={navigate} />
        </Layout>
      );
    case Page.register:
      return (
        <Layout>
          <Register navigate={navigate} login={(user) => userLogin(user)} />
        </Layout>
      );
  }
}

export default App;
