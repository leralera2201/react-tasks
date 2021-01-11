import SmallSpin from "./SmallSpin";

export default {
  title: "Example/Spin",
  component: SmallSpin,
  argTypes: { color: { control: "color" } },
};

export const Small = (args) => <SmallSpin {...args} />;
