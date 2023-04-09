import { render, screen } from "@testing-library/react";
import { vi, expect } from "vitest";
import Palette from "@/components/Palette";

describe("Palette", () => {
  const clickHandler = vi.fn();
  beforeEach(() => {
    render(
      <Palette
        onClick={clickHandler}
      />
    );
  });
  afterEach(() => {
    clickHandler.mockReset();
  });
  it("renders without errors", () => {
    screen.debug();
  });
  it("dot clicks emits events", async () => {
    const Palette = await screen.findByText('❌');
    expect(Palette).toBeVisible();
    Palette.click();
    expect(clickHandler).toHaveBeenCalled();
  });
});
