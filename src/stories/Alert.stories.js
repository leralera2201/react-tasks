import React from "react";

import Alert from "@components/Alert";

export default {
  title: "Example/Alert",
  component: Alert,
};

const Template = (args) => <Alert {...args} />;

export const Info = Template.bind({});
Info.args = {
  message: "I am info alert",
  type: "info",
};

export const Success = Template.bind({});
Success.args = {
  message: "I am success alert",
  type: "success",
};

export const Warning = Template.bind({});
Warning.args = {
  message: "I am warning alert",
  type: "warning",
};

export const Error = Template.bind({});
Error.args = {
  message: "I am error alert",
  type: "error",
  showIcon: true,
};
