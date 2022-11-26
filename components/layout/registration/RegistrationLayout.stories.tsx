import { ComponentMeta, ComponentStory } from '@storybook/react';
import RegistrationLayout, { IRegistrationLayout } from './RegistrationLayout';
import { mockRegistrationLayoutProps } from './RegistrationLayout.mocks';

export default {
  title: 'layout/RegistrationLayout',
  component: RegistrationLayout,
  argTypes: {},
} as ComponentMeta<typeof RegistrationLayout>;

const Template: ComponentStory<typeof RegistrationLayout> = (args) => (
  <RegistrationLayout {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockRegistrationLayoutProps.base,
} as IRegistrationLayout;