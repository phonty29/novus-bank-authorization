import { ComponentMeta, ComponentStory } from '@storybook/react';
import FooterRegistration, { IFooterRegistration } from './FooterRegistration';
import { mockFooterRegistrationProps } from './FooterRegistration.mocks';

export default {
  title: 'auth/FooterRegistration',
  component: FooterRegistration,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof FooterRegistration>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FooterRegistration> = (args) => (
  <FooterRegistration {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFooterRegistrationProps.base,
} as IFooterRegistration;