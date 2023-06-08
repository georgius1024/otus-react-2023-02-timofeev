import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";

import TodoList from "./TodoList.tsx";

describe("TodoList", () => {

  it("renders without errors", () => {
    expect(render(<TodoList todos={[{id: 420, name: 'mr 420'}]} onCompleted={vi.fn()} />)).toMatchSnapshot();
  });

  it("button click triggers event", async () => {
    const onCompleted = vi.fn()
    render(<TodoList todos={[{id: 420, name: 'mr 420'}]} onCompleted={onCompleted} />);
    const item = screen.getByText(/420/i)
    fireEvent.click(item);
    expect(onCompleted).toHaveBeenCalled();
  });

});
