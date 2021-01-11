import Select from "@components/Select";
import LargeSelect from "./LargeSelect";

export default {
  title: "Example/Select",
  component: LargeSelect,
  argTypes: {
    wrapper: { table: { disable: true } },
  },
};

export const Large = (args) => <Select {...args} />;
Large.args = {
  wrapper: LargeSelect,
};
