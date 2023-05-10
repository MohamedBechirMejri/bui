import type { StoryObj } from '@storybook/react';

import { Magic } from '@bui/buttons';

const meta = {
  title: 'Buttons/Magic',
  component: Magic,
  // tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
  },
}

export default meta;

export const Default: StoryObj<typeof meta> = {};