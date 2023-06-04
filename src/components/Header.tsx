import { ReactElement } from "react";
import "@/App.scss";
import type { User, Logout, Navigate } from "@/types";
import { Page } from "@/types";

type HeaderProps = {
  user: User | null,
  navigate: Navigate,
  logout: Logout,
};

const Header = (props: HeaderProps): ReactElement => {
  const logout = () => {
    props.logout(null);
    props.navigate(Page.login);
  };

  return (
    <header className="header">
      <div className="section section-1">
        <a onClick={() => props.navigate(Page.home)}>[LOGO]</a>
      </div>
      <div className="section section-2">
        TODOAPP
      </div>
      <div className="section section-3">
        {props.user
          ? <a onClick={logout}>Logout</a>
          : <>
            <a onClick={() => props.navigate(Page.login)}>Login</a>
            &nbsp;
            <a onClick={() => props.navigate(Page.register)}>Register</a>
          </>}
      </div>
    </header>
  );
};

export default Header;
