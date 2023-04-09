import { render, screen } from "@testing-library/react";
import { vi, expect } from "vitest";
import Canvas from "@/components/Canvas";

describe("Canvas", () => {
  const clickHandler = vi.fn();
  beforeEach(() => {
    render(<Canvas cols={3} rows={3} dx={50} dy={50} onClick={clickHandler} />);
  });
  afterEach(() => {
    clickHandler.mockReset();
  });
  it("renders without errors", () => {
    screen.debug();
  });
  it("dot clicks emits events", () => {
    const dots = screen.queryAllByTestId("cell-dot-marker");
    expect(dots).toHaveLength(9);
    expect(dots[0]).toBeVisible();
    dots[0].click();
    expect(clickHandler).toHaveBeenCalled();
  });
});
