import type { Meta, StoryObj } from "@storybook/react";

import Canvas from "@/components/Canvas";

const meta = {
  title: "Canvas",
  component: Canvas,
  argTypes: { onClick: { action: "clicked" } },
} satisfies Meta<typeof Canvas>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cols: 10,
    rows: 10,
    dx: 50,
    dy: 50,
  },
};
