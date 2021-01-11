import SuccessAlert from "./SuccessAlert";

export default {
  title: "Example/Alert",
  component: SuccessAlert,
  argTypes: {
    showIcon: { control: "boolean" },
    type: { table: { disable: true } },
  },
};

export const Success = (args) => <SuccessAlert {...args} />;
Success.args = {
  message: "I am success alert",
  type: "Success",
};
