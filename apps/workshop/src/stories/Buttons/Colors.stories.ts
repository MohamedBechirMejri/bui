import type { StoryObj } from "@storybook/react";

import { Colors } from "@bui/buttons";

const meta = {
  title: "Buttons/Colors",
  component: Colors,
  // tags: ['autodocs'],
  argTypes: {
    text: { control: "text" },
    color: { control: "color" },
    numberOfColors: { control: "number", defaultValue: 5 },
    duration: { control: "number", defaultValue: 1 },
  },
};

export default meta;

export const Default: StoryObj<typeof meta> = {};
