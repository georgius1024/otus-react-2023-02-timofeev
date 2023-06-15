import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '@/store'
import { logout } from '@/store/auth'

import "@/App.scss";

const Header = (): ReactElement => {
  const user = useSelector((state: RootState) => state.auth.user)
  const dispatch = useDispatch()  
  return (
    <header className="header">
      <div className="section section-1">
        <Link to="/">[LOGO]</Link>
      </div>
      <div className="section section-2">TODOAPP</div>
      <div className="section section-3">
        {user ? (
          <Link to="/login" onClick={() => dispatch(logout())}>Logout</Link>
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
