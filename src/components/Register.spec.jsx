import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import flushPromises from 'flush-promises'

vi.mock("firebase/auth", () => ({
  getAuth: vi.fn().mockResolvedValue(true),
  createUserWithEmailAndPassword: vi.fn().mockResolvedValue(true)
}))

import * as firebaseAuth from "firebase/auth"
import Register from "./Register.tsx";

describe("Register", () => {
  it("renders without errors", () => {
    expect(render(<Register navigate={vi.fn()} login={vi.fn()} />)).toMatchSnapshot();
  });

  it("button click triggers request and navigation", async () => {
    const navigate = vi.fn()
    const login = vi.fn()
    render(<Register navigate={navigate} login={login} />);
    const button = screen.getByRole('button', {
      name: /Register/i
    })
    fireEvent.click(button);
    await flushPromises()
    expect(firebaseAuth.createUserWithEmailAndPassword).toHaveBeenCalled();
    expect(navigate).toHaveBeenCalled();
    expect(login).toHaveBeenCalled();
  });
});
