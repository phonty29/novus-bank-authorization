import { ComponentMeta, ComponentStory } from '@storybook/react';
import Signin, { ISignin } from './Signin';
import { mockSigninProps } from './Signin.mocks';

export default {
  title: 'auth/Signin',
  component: Signin,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Signin>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Signin> = (args) => (
  <Signin {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSigninProps.base,
} as ISignin;