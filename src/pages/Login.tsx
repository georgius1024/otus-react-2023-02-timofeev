import { PureComponent } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "@/firebase";
import type { Login } from "@/types";

type LoginProps = {
  login: Login;
};

type LoginState = {
  email: string;
  password: string;
};

class LoginPage extends PureComponent<LoginProps, LoginState> {
  state: LoginState = {
    email: "",
    password: "",
  };
  constructor(props: LoginProps) {
    super(props);
    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.submit = this.submit.bind(this);
  }
  setEmail(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ email: event.target.value });
  }
  setPassword(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ password: event.target.value });
  }
  submit(event: React.MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    signInWithEmailAndPassword(auth, this.state.email, this.state.password)
      .then((userCredential) => {
        this.props.login(userCredential.user);
        alert("Welcome back");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert(`Can\'t login: ${errorMessage}`);
      });
  }
  render() {
    return (
      <form name="login">
        <h1>Login</h1>
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
        <Link to="/forgot">Forgot password?</Link>
        <button type="button" onClick={this.submit}>
          Login
        </button>
      </form>
    );
  }
}

export default LoginPage;
