import { useState, ReactElement, useCallback } from "react";
import "@/App.scss";
import type { User, Logout, Navigate } from "@/types";

type HeaderProps = {
  user: User | null,
  page: string,
  navigate: Navigate,
  logout: Logout,
};

const Header = (props: HeaderProps): ReactElement => {
  const logout = () => {
    props.logout(null);
    props.navigate("login");
  };

  return (
    <header className="header">
      <div className="section section-1">
        <a onClick={() => props.navigate('home')}>[LOGO]</a>
      </div>
      <div className="section section-2">
        TODOAPP::{props.page}
      </div>
      <div className="section section-3">
        {props.user
          ? <a onClick={logout}>Logout</a>
          : <>
            <a onClick={() => props.navigate('login')}>Login</a>
            &nbsp;
            <a onClick={() => props.navigate('register')}>Register</a>
          </>}
      </div>
    </header>
  );
};

export default Header;
