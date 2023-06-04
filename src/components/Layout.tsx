import { ReactElement } from "react";
import Header from "@/components/Header";
import type { User, Logout } from "@/types";

type LayoutProps = {
  children: React.ReactNode;
};

type LayoutBuilderType = (props: LayoutProps) => ReactElement;

const LayoutBuilder =
  (user: User | null, logout: Logout): LayoutBuilderType =>
  (props: LayoutProps): ReactElement => {
    return (
      <div className="layout">
        <Header user={user} logout={logout} />
        <main className="main">
          {props.children}
        </main>
        <footer className="footer">(c) Diligent student</footer>
      </div>
    );
  };

export default LayoutBuilder;
