import { render, screen } from "@testing-library/react";
import { vi, expect } from "vitest";
import Palette from "@/components/Palette";

describe("Palette", () => {
  const clickHandler = vi.fn();
  let wrapper: any
  beforeEach(() => {
    wrapper = render(
      <Palette
        onClick={clickHandler}
      />
    );
  });
  afterEach(() => {
    clickHandler.mockReset();
  });
  it("renders without errors", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("dot clicks emits events", async () => {
    const Palette = await screen.findByText('❌');
    expect(Palette).toBeVisible();
    Palette.click();
    expect(clickHandler).toHaveBeenCalled();
  });
});
