import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import flushPromises from 'flush-promises'

import Header from "./Header.tsx";

describe("Header", () => {
  it("renders without errors without user", () => {
    expect(render(<Header user={null} navigate={vi.fn()} logout={vi.fn()}/>)).toMatchSnapshot();
  });
  it("renders without errors with user", () => {
    expect(render(<Header user={{id: 101}} navigate={vi.fn()} logout={vi.fn()}/>)).toMatchSnapshot();
  });

  it("can logout", async () => {
    const logout = vi.fn()
    render(<Header user={{id: 101}} navigate={vi.fn()} logout={logout}/>)
    const control = screen.getByText(/Logout/i)
    fireEvent.click(control);
    await flushPromises()
    expect(logout).toHaveBeenCalled();
  });

  it("can login", async () => {
    const navigate = vi.fn()
    render(<Header user={null} navigate={navigate} logout={vi.fn()}/>)
    const control = screen.getByText(/Login/i)
    fireEvent.click(control);
    await flushPromises()
    expect(navigate).toHaveBeenCalled();
  });

  it("can register", async () => {
    const navigate = vi.fn()
    render(<Header user={null} navigate={navigate} logout={vi.fn()}/>)
    const control = screen.getByText(/Register/i)
    fireEvent.click(control);
    await flushPromises()
    expect(navigate).toHaveBeenCalled();
  });

});
