import React from "react";

import Typography from "@components/Typography";

export default {
  title: "Example/Typography",
  component: Typography,
};

const Template = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "I am default typography",
};

export const Success = Template.bind({});
Success.args = {
  success: true,
  size: "large",
  label: "I am large success typography",
};

export const Warning = Template.bind({});
Warning.args = {
  label: "I am small warning typography",
  size: "small",
  warning: true,
};

export const Danger = Template.bind({});
Danger.args = {
  danger: true,
  label: "I am danger typography",
};
