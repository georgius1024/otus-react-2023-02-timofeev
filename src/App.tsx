import { useState, ReactElement, useCallback } from "react";
import "@/App.scss";
import Login from "@/components/Login";
import type { User, Logout } from "@/types";

type LayoutProps = {
  children: React.ReactNode;
};

const LayoutBuilder =
  (page: string, user: User | null, logout: Logout): any =>
  (props: LayoutProps): ReactElement => {
    return (
      <div className="App">
        <header>{page}</header>
        <main>{props.children}</main>
        <footer>
          <a href="javascript:void(0)" onClick={() => logout(null)}>Click here to Logout</a>
          <pre className="wrappable">{JSON.stringify(user)}</pre>
        </footer>
      </div>
    );
  };

function App(): ReactElement {
  const [page, navigate] = useState("login");
  const [user, login] = useState<User | null>(null);
  const logout = () => {
    login(null)
    navigate('login')
  }
  console.log(page, user);

  const Layout = LayoutBuilder(page, user, logout);
  switch (page) {
    case "home":
      return <Layout></Layout>;
    case "login":
      return (
        <Layout>
          <Login navigate={navigate} login={(user) => login(user)} />
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
