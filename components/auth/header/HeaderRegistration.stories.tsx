import { ComponentMeta, ComponentStory } from '@storybook/react';
import HeaderRegistration, { IHeaderRegistration } from './HeaderRegistration';
import { mockHeaderRegistrationProps } from './HeaderRegistration.mocks';

export default {
  title: 'auth/HeaderRegistration',
  component: HeaderRegistration,
  argTypes: {},
} as ComponentMeta<typeof HeaderRegistration>;

const Template: ComponentStory<typeof HeaderRegistration> = (args) => (
  <HeaderRegistration {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockHeaderRegistrationProps.base,
} as IHeaderRegistration;