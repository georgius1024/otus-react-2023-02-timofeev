import { ReactElement } from "react";
import "@/App.scss";
import Header from "@/components/Header";
import type { User, Logout, Navigate } from "@/types";

type LayoutProps = {
  children: React.ReactNode;
};
type LayoutBuilderType = (props: LayoutProps) => ReactElement;
const LayoutBuilder =
  (
    user: User | null,
    logout: Logout,
    navigate: Navigate
  ): LayoutBuilderType =>
  (props: LayoutProps): ReactElement => {
    return (
      <>
        <Header user={user} navigate={navigate} logout={logout} />
        <main className="container">{props.children}</main>
        <footer className="footer">(c) Diligent student</footer>
      </>
    );
  };

export default LayoutBuilder;
