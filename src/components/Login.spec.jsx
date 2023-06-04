import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import flushPromises from 'flush-promises'

vi.mock("firebase/auth", () => ({
  getAuth: vi.fn().mockResolvedValue(true),
  signInWithEmailAndPassword: vi.fn().mockResolvedValue(true)
}))

import * as firebaseAuth from "firebase/auth"
import Login from "./Login.tsx";

describe("Login", () => {
  it("renders without errors", () => {
    expect(render(<Login navigate={vi.fn()} login={vi.fn()} />)).toMatchSnapshot();
  });

  it("button click triggers request and navigation", async () => {
    const navigate = vi.fn()
    const login = vi.fn()
    render(<Login navigate={navigate} login={login} />);
    const button = screen.getByRole('button', {
      name: /Login/i
    })
    fireEvent.click(button);
    await flushPromises()
    expect(firebaseAuth.signInWithEmailAndPassword).toHaveBeenCalled();
    expect(navigate).toHaveBeenCalled();
    expect(login).toHaveBeenCalled();
  });
});
