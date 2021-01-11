import WarningAlert from "./WarningAlert";

export default {
  title: "Example/Alert",
  component: WarningAlert,
  argTypes: {
    showIcon: { control: "boolean" },
    type: { table: { disable: true } },
  },
};

export const Warning = (args) => <WarningAlert {...args} />;
Warning.args = {
  message: "I am warning alert",
  type: "warning",
  showIcon: true,
};
