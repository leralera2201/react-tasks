import React from "react";

import Select from "@components/Select";

export default {
  title: "Example/Select",
  component: Select,
};

const Template = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "default",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
};
