import { ComponentMeta, ComponentStory } from '@storybook/react';
import Documents, { IDocuments } from './Documents';
import { mockDocumentsProps } from './Documents.mocks';

export default {
  title: 'Documents',
  component: Documents,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Documents>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Documents> = (args) => (
  <Documents {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockDocumentsProps.base,
} as IDocuments;