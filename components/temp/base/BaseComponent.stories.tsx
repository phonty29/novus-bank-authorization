import { ComponentMeta, ComponentStory } from '@storybook/react';
import BaseComponent, { IBaseComponent } from './BaseComponent';
import { mockBaseComponentProps } from './BaseComponent.mocks';

export default {
  title: 'templates/BaseComponent',
  component: BaseComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof BaseComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BaseComponent> = (args) => (
  <BaseComponent {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBaseComponentProps.base,
} as IBaseComponent;
