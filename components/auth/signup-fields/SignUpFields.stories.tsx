import { ComponentMeta, ComponentStory } from '@storybook/react';
import SignUpFields, { ISignUpFields } from './SignUpFields';
import { mockSignUpFieldsProps } from './SignUpFields.mocks';

export default {
  title: 'templates/SignUpFields',
  component: SignUpFields,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SignUpFields>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SignUpFields> = (args) => (
  <SignUpFields {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSignUpFieldsProps.base,
} as ISignUpFields;
