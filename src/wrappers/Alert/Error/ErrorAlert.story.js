import ErrorAlert from "./ErrorAlert";

export default {
  title: "Example/Alert",
  component: ErrorAlert,
  argTypes: {
    showIcon: { control: "boolean" },
    type: { table: { disable: true } },
  },
};

export const Error = (args) => <ErrorAlert {...args} />;
Error.args = {
  message: "I am error alert",
  type: "error",
};
