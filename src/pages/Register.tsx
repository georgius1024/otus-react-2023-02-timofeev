import { ReactElement, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "@/store/auth";

export default function Register(): ReactElement {
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
  const submit = async (
    event: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    event.preventDefault();
    const { error } = await dispatch(register({ email, password }) as any);
    if (!error) {
      navigate("/");
      alert("Thank you for registration");
    } else {
      alert(error.message);
    }
  };

  return (
    <form name="register">
      <h1>Register</h1>
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
        Register
      </button>
    </form>
  );
}

type LoginState = {
  email: string;
  password: string;
};
