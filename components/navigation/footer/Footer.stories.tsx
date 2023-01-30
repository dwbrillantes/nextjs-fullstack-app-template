import { ComponentMeta, ComponentStory } from '@storybook/react';

import Footer, { IFooter } from './Footer';
import { mockFooterProps } from './Footer.mocks';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'navigation/Footer',
  component: Footer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Footer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockFooterProps.base,
} as IFooter;
