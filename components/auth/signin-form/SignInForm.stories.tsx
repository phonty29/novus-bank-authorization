import { ComponentMeta, ComponentStory } from '@storybook/react';
import SignInForm, { ISignInForm } from './SignInForm';
import { mockSignInFormProps } from './SignInForm.mocks';

export default {
  title: 'auth/SignInForm',
  component: SignInForm,
  argTypes: {},
} as ComponentMeta<typeof SignInForm>;

const Template: ComponentStory<typeof SignInForm> = (args) => (
  <SignInForm {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockSignInFormProps.base,
} as ISignInForm;
