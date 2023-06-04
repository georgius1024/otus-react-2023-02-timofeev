import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import flushPromises from 'flush-promises'

import LayoutBuilder from "./Layout.tsx";

describe("LayoutBuilder", () => {

  it("renders without errors without user", () => {
    const Layout = LayoutBuilder(null, vi.fn(), vi.fn())
    expect(render(<Layout />)).toMatchSnapshot();
  });
  it("renders without errors with user", () => {
    const Layout = LayoutBuilder({id: 101}, vi.fn(), vi.fn())
    expect(render(<Layout />)).toMatchSnapshot();
  });
});
