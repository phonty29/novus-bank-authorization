import { ComponentMeta, ComponentStory } from '@storybook/react';
import SignUpFields, { ISignUpFields } from './SignUpFields';
import { mockSignUpFieldsProps } from './SignUpFields.mocks';

export default {
  title: 'templates/SignUpFields',
  component: SignUpFields,
  argTypes: {},
} as ComponentMeta<typeof SignUpFields>;

const Template: ComponentStory<typeof SignUpFields> = (args) => (
  <SignUpFields {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockSignUpFieldsProps.base,
} as ISignUpFields;
