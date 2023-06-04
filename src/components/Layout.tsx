import { ReactElement } from "react";
import Header from "@/components/Header";
import type { User, Logout } from "@/types";

type LayoutProps = {
  children: React.ReactNode;
};


const Layout = (props: LayoutProps): ReactElement => {
    return (
      <div className="layout">
        <Header />
        <main className="main">{props.children}</main>
        <footer className="footer">(c) Diligent student</footer>
      </div>
    );
  };

export default Layout;
