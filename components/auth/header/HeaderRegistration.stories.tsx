import { ComponentMeta, ComponentStory } from '@storybook/react';
import HeaderRegistration, { IHeaderRegistration } from './HeaderRegistration';
import { mockHeaderRegistrationProps } from './HeaderRegistration.mocks';

export default {
  title: 'auth/HeaderRegistration',
  component: HeaderRegistration,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HeaderRegistration>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeaderRegistration> = (args) => (
  <HeaderRegistration {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockHeaderRegistrationProps.base,
} as IHeaderRegistration;