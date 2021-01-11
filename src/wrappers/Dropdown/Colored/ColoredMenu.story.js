import Dropdown from "@components/Dropdown";

import ColoredDropdown from "./ColoredDropdown";

export default {
  title: "Example/Dropdown",
  component: Dropdown,
  argTypes: {
    colorWrapper: { table: { disable: true } },
    color: { control: "color" },
  },
};

export const Colored = (args) => <Dropdown {...args} />;
Colored.args = {
  colorWrapper: ColoredDropdown,
  color: "black",
};
