import { ComponentMeta, ComponentStory } from '@storybook/react';
import RegistrationLayout, { IRegistrationLayout } from './RegistrationLayout';
import { mockRegistrationLayoutProps } from './RegistrationLayout.mocks';

export default {
  title: 'layout/RegistrationLayout',
  component: RegistrationLayout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof RegistrationLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RegistrationLayout> = (args) => (
  <RegistrationLayout {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockRegistrationLayoutProps.base,
} as IRegistrationLayout;