import { render, screen } from "@testing-library/react";
import { vi, expect } from "vitest";
import Node from "@/components/Node";

describe("Node", () => {
  const clickHandler = vi.fn();
  beforeEach(() => {
    render(
      <Node
        col={2}
        row={2}
        dx={50}
        dy={50}
        color={"red"}
        symbol={"#"}
        background={"red"}
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
    const node = await screen.findByText("#");
    expect(node).toBeVisible();
    node.click();
    expect(clickHandler).toHaveBeenCalled();
  });
});
