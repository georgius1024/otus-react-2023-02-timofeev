import type { Meta, StoryObj } from "@storybook/react";

import TodoList from "../components/TodoList";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "TodoList",
  component: TodoList,
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    todos: [
      { id: "420", uid: "1", completed: false, name: "mr 420" },
      { id: "421", uid: "1", completed: false, name: "mr 421" },
      { id: "422", uid: "1", completed: false, name: "mr 422" },
    ],
    onCompleted: () => {},
  },
};

