import { Component } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/firebase";

import type { Navigate, Login } from "@/types";
type ForgotProps = {
  navigate: Navigate;
};
type ForgotState = {
  email: string;
}

class ForgotPage extends Component<ForgotProps, ForgotState> {
  state: ForgotState = {
    email: ""
  }
  constructor(props: ForgotProps) {
    super(props);
    this.setEmail = this.setEmail.bind(this);
    this.submit = this.submit.bind(this);
  }
  setEmail(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ email: event.target.value });
  }
  submit(event: React.MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    sendPasswordResetEmail(auth, this.state.email)
      .then(() => {
        alert("We sent reset password recovery email");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert(`Can\'t restore password: ${errorMessage}`);
      });
  }
  render() {
    return (
      <form name="forgot">
        <h1>Restore password</h1>
        <input
          value={this.state.email}
          type="email"
          name="email"
          onInput={this.setEmail}
        />
        <button type="button" onClick={this.submit}>
          Restore
        </button>
      </form>
    );
  }
}

export default ForgotPage;
