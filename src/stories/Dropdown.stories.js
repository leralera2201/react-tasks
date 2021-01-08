import React from "react";

import Dropdown from "@components/Dropdown";

export default {
  title: "Example/Dropdown",
  component: Dropdown,
  argTypes: {
    color: { control: "color" },
  },
};

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});

export const Red = Template.bind({});
Red.args = {
  color: "red",
};

export const Bordered = Template.bind({});
Bordered.args = {
  bordered: true,
  color: "black",
};
