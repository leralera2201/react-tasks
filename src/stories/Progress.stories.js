import React from "react";

import Progress from "@components/Progress";

export default {
  title: "Example/Progress",
  component: Progress,
  // argTypes: {
  //     percent: { control: 'number' },
  // },
};

const Template = (args) => <Progress {...args} />;

export const Warning = Template.bind({});
Warning.args = {
  percent: 70,
  size: "small",
  color: "warning",
};

export const Success = Template.bind({});
Success.args = {
  percent: 70,
  size: "large",
  color: "success",
};

export const Danger = Template.bind({});
Danger.args = {
  size: "default",
  percent: 70,
  color: "danger",
};
