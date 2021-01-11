import SuccessProgress from "./SuccessProgress";

export default {
  title: "Example/Progress",
  component: SuccessProgress,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    percent: { control: "number" },
  },
};

export const Success = (args) => <SuccessProgress {...args} />;
Success.args = {
  percent: 50,
  size: "medium",
};
