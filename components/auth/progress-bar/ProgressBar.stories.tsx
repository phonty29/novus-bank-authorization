import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProgressBar, { IProgressBar } from './ProgressBar';
import { mockProgressBarProps } from './ProgressBar.mocks';

export default {
  title: 'auth/ProgressBar',
  component: ProgressBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ProgressBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockProgressBarProps.base,
} as IProgressBar;
