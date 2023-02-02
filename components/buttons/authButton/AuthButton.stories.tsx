import { ComponentMeta, ComponentStory } from '@storybook/react';

import AuthButton, { IAuthButton } from './AuthButton';
import { mockAuthButtonProps } from './AuthButton.mocks';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'buttons/AuthButton',
  component: AuthButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof AuthButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AuthButton> = (args) => (
  <AuthButton {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockAuthButtonProps.base,
} as IAuthButton;
