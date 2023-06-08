import { PureComponent } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/firebase";

type ForgotState = {
  email: string;
};

class ForgotPage extends PureComponent<{}, ForgotState> {
  state: ForgotState = {
    email: "",
  };
  setEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ email: event.target.value });
  };

  submit = (event: React.MouseEvent<HTMLButtonElement>): void => {
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
  };

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
