import LargeSwitch from "./LargeSwitch";

export default {
  title: "Example/Switch",
  component: LargeSwitch,
  argTypes: {
    color: { control: "color" },
  },
};

export const Large = (args) => <LargeSwitch {...args} />;
