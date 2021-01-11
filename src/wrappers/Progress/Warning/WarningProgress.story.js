import WarningProgress from "./WarningProgress";

export default {
  title: "Example/Progress",
  component: WarningProgress,
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

export const Warning = (args) => <WarningProgress {...args} />;
Warning.args = {
  percent: 50,
  size: "large",
};
