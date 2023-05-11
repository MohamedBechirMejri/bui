import type { StoryObj } from '@storybook/react';

import { Wobble } from '@bui/buttons';

const meta = {
  title: 'Buttons/Wobble',
  component: Wobble,
  // tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    color: { control: 'color', defaultValue: '#6633fe' },
  },
}

export default meta;

export const Default: StoryObj<typeof meta> = {};