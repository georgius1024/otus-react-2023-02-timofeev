import { ReactElement, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "@/firebase";

import { useDispatch } from "react-redux";
import { login } from "@/store/auth";

export default function Login(): ReactElement {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const emailChanged = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };
  const passwordChanged = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(event.target.value);
  };
  const submit = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { uid, email, providerData } = userCredential.user;
        dispatch(login({ uid, email, providerData }));
        navigate("/");
        alert("Welcome back");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert(`Can\'t login: ${errorMessage}`);
      });
  };

  return (
    <form name="login">
      <h1>Login</h1>
      <label>
        Email
        <input value={email} type="email" name="email" onInput={emailChanged} />
      </label>
      <label>
        Password
        <input value={password} type="password" onInput={passwordChanged} />
      </label>
      <Link to="/forgot">Forgot password?</Link>
      <button type="button" onClick={submit}>
        Login
      </button>
    </form>
  );
}
