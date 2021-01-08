import React from "react";

import Button from "@components/Button";

export default {
  title: "Example/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Simple",
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Primary",
};

export const Danger = Template.bind({});
Danger.args = {
  danger: true,
  label: "Danger",
};
