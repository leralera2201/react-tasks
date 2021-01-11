import InfoAlert from "./InfoAlert";

export default {
  title: "Example/Alert",
  component: InfoAlert,
  argTypes: {
    showIcon: { control: "boolean" },
    type: { table: { disable: true } },
  },
};

export const Info = (args) => <InfoAlert {...args} />;
Info.args = {
  message: "I am info alert",
  type: "info",
};
