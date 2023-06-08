import { PureComponent } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";

import type { Navigate, Login } from "@/types";
import { Page } from "@/types";

type RegisterProps = {
  navigate: Navigate;
  login: Login;
};
type RegisterState = {
  email: string;
  password: string;
}

class RegisterPage extends PureComponent<RegisterProps, RegisterState> {
  state: RegisterState = {
    email: "", password: ""
  }
  constructor(props: RegisterProps) {
    super(props);
  }
  setEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ email: event.target.value });
  }
  setPassword = (event: React.ChangeEvent<HTMLInputElement>): void  => {
    this.setState({ password: event.target.value });
  }
  submit = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, this.state.email, this.state.password)
      .then((userCredential) => {
        this.props.login(userCredential.user)
        this.props.navigate(Page.home)
        alert("Thank you for registration");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert("Thank you for registration");
      });
  }
  render() {
    return (
      <form name="register">
        <h1>Register</h1>
        <input
          value={this.state.email}
          type="email"
          name="email"
          onInput={this.setEmail}
        />
        <label>Password</label>
        <input
          value={this.state.password}
          type="password"
          onInput={this.setPassword}
        />
        <a href="javascript:void(0)" onClick={() => this.props.navigate(Page.forgot)}>Forgot password?</a>
        <button type="button" onClick={this.submit}>
          Register
        </button>
      </form>
    );
  }
}

export default RegisterPage;
