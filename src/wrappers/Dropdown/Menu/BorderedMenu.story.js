import BorderedMenu from "./BorderedMenu";
import Dropdown from "@components/Dropdown";

export default {
  title: "Example/Dropdown",
  component: Dropdown,
  argTypes: {
    wrapper: { table: { disable: true } },
  },
};

export const Bordered = (args) => <Dropdown {...args} />;
Bordered.args = {
  wrapper: BorderedMenu,
};
