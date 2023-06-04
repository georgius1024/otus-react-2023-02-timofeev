import { ReactElement } from "react";
import { Link } from "react-router-dom";
import "@/App.scss";
import type { User, Logout } from "@/types";

type HeaderProps = {
  user: User | null;
  logout: Logout;
};

const Header = (props: HeaderProps): ReactElement => {
  return (
    <header className="header">
      <div className="section section-1">
        <Link to="/">[LOGO]</Link>
      </div>
      <div className="section section-2">TODOAPP</div>
      <div className="section section-3">
        {props.user ? (
          <a onClick={() => props.logout()}>Logout</a>
        ) : (
          <>
            <Link to="/login">Login</Link>
            &nbsp;
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
