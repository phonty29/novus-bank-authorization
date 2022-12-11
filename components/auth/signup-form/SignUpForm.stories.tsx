import { ComponentMeta, ComponentStory } from '@storybook/react';
import SignUpForm, { ISignUpForm } from './SignUpForm';
import { mockSignUpFormProps } from './SignUpForm.mocks';

export default {
  title: 'auth/SignUpForm',
  component: SignUpForm,
  argTypes: {},
} as ComponentMeta<typeof SignUpForm>;

const Template: ComponentStory<typeof SignUpForm> = (args) => (
  <SignUpForm {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockSignUpFormProps.base,
} as ISignUpForm;
