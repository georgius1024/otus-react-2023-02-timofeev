import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import flushPromises from 'flush-promises'

vi.mock("firebase/auth", () => ({
  getAuth: vi.fn().mockResolvedValue(true),
  sendPasswordResetEmail: vi.fn().mockResolvedValue(true)
}))

import * as firebaseAuth from "firebase/auth"
import Forgot from "./Forgot.tsx";

describe("Forgot", () => {
  it("renders without errors", () => {
    expect(render(<Forgot />)).toMatchSnapshot();
  });

  it("button click triggers request and navigation", async () => {
    render(<Forgot />);
    const button = screen.getByRole('button', {
      name: /Restore/i
    })
    fireEvent.click(button);
    await flushPromises()
    expect(firebaseAuth.sendPasswordResetEmail).toHaveBeenCalled();
  });
});
