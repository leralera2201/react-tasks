import DangerProgress from "./DangerProgress";

export default {
  title: "Example/Progress",
  component: DangerProgress,
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

export const Danger = (args) => <DangerProgress {...args} />;
Danger.args = {
  percent: 50,
  size: "small",
};
