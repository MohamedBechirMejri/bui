import type { StoryObj } from '@storybook/react';

import { Glow } from '@bui/buttons';

const meta = {
  title: 'Buttons/Glow',
  component: Glow,
  // tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    color: { control: 'color' },
  },
}

export default meta;

export const Default: StoryObj<typeof meta> = {};