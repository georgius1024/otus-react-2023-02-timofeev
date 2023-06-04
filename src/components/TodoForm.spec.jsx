import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";

import TodoForm from "./TodoForm.tsx";

describe("TodoForm", () => {

  it("renders without errors", () => {
    expect(render(<TodoForm user={{uid:101}} />)).toMatchSnapshot();
  });

  it("button click triggers event", async () => {
    const onAdd = vi.fn()
    render(<TodoForm  user={{uid:101}} onAdd={onAdd} />);
    const button = screen.getByRole('button', {
      name: /Add/i
    })
    fireEvent.click(button);
    expect(onAdd).toHaveBeenCalled();
  });

});
