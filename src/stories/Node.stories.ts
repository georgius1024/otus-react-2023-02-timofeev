import type { Meta, StoryObj } from "@storybook/react";

import Node from "@/components/Node";

const meta = {
  title: "Node",
  component: Node,
  argTypes: { onClick: { action: "clicked" } },
} satisfies Meta<typeof Node>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    col: 2,
    row: 2,
    dx: 50,
    dy: 50,
    color: 'red',
    symbol: '🐷',
    background: 'silver'
  },
};
