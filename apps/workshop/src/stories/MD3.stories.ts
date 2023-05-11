import type { StoryObj } from '@storybook/react';

import { MD3 } from '@bui/buttons';

const meta = {
  title: 'Buttons/MD3',
  component: MD3,
  // tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    color: { control: 'color' },
  },
}

export default meta;

export const Default: StoryObj<typeof meta> = {};