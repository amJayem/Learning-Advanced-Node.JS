import type { Meta, StoryObj } from '@storybook/react';

import Repository from './repository';

const meta: Meta<typeof Repository> = {
  title: 'gitstream/component/repository',
  component: Repository,
};

export default meta;

export const Default: StoryObj<typeof Repository> = {
  args: {
    // Add any default props for Repository here
  },
};
