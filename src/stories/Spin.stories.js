import React from "react";

import Spin from "@components/Spin";

export default {
  title: "Example/Spin",
  component: Spin,
  argTypes: {
    color: { control: "color" },
  },
};

const Template = (args) => <Spin {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "default",
};

export const Large = Template.bind({});
Large.args = {
  color: "black",
  size: "large",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
};
