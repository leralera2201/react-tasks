import LargeSpin from "./LargeSpin";

export default {
  title: "Example/Spin",
  component: LargeSpin,
  argTypes: { color: { control: "color" } },
};

export const Large = (args) => <LargeSpin {...args} />;
