import { useState, ReactElement, useCallback } from "react";
import "@/App.scss";
import LayoutBuilder from "@/components/Layout";
import Login from "@/components/Login";
import Forgot from "@/components/Forgot";
import Register from "@/components/Register";
import Todos from "@/components/Todos";
import type { User, Logout } from "@/types";

function App(): ReactElement {
  const [page, navigate] = useState("login");
  const [user, login] = useState<User | null>(null);
  const logout = () => {
    login(null);
    navigate("login");
  };
  console.log(page, user);

  const Layout = LayoutBuilder(page, user, logout, navigate );
  switch (page) {
    case "home":
      return <Layout><Todos user={user}/></Layout>;
    case "login":
      return (
        <Layout>
          <Login navigate={navigate} login={(user) => login(user)} />
        </Layout>
      );
    case "forgot":
      return (
        <Layout>
          <Forgot navigate={navigate} />
        </Layout>
      );
      case "register":
        return (
          <Layout>
            <Register navigate={navigate} login={(user) => login(user)} />
          </Layout>
        );
    }

  return (
    <div className="App">
      <h1>HELLO</h1>
    </div>
  );
}

export default App;
