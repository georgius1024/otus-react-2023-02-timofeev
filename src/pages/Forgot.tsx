import { ReactElement, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { forgot } from "@/store/auth";

export default function Forgot(): ReactElement {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");

  const emailChanged = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const submit = async (
    event: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    event.preventDefault();
    const { error } = await dispatch(forgot(email) as any);
    if (!error) {
      navigate("/");
      alert("We sent reset password recovery email");
    } else {
      alert(error.message);
    }
  };

  return (
    <form name="forgot">
      <h1>Restore password</h1>
      <input value={email} type="email" name="email" onInput={emailChanged} />
      <button type="button" onClick={submit}>
        Restore
      </button>
    </form>
  );
}
