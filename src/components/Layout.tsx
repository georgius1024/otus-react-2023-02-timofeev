import { ReactElement } from "react";
import "@/App.scss";
import Header from "@/components/Header";
import type { User, Logout, Navigate } from "@/types";

type LayoutProps = {
  children: React.ReactNode;
};

const LayoutBuilder =
  (page: string, user: User | null, logout: Logout, navigate: Navigate): any =>
    (props: LayoutProps): ReactElement => {
      return (
        <>
          <Header user={user} navigate={navigate} logout={logout} page={page} />
          <main className="container">{props.children}</main>
          <footer className="footer">(c) Diligent student</footer>
        </>
      );
    };

export default LayoutBuilder;
