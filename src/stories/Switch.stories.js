import React from "react";

import Switch from "@components/Switch";

export default {
  title: "Example/Switch",
  component: Switch,
  argTypes: {
    color: { control: "color" },
  },
};

const Template = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "default",
};

export const RedLarge = Template.bind({});
RedLarge.args = {
  color: "red",
  size: "large",
};
