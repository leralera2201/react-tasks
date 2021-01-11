import MediumSwitch from "./MediumSwitch";

export default {
  title: "Example/Switch",
  component: MediumSwitch,
  argTypes: {
    color: { control: "color" },
  },
};

export const Medium = (args) => <MediumSwitch {...args} />;
