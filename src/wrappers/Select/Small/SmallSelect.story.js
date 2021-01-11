import Select from "@components/Select";
import SmallSelect from "./SmallSelect";

export default {
  title: "Example/Select",
  component: SmallSelect,
  argTypes: {
    wrapper: { table: { disable: true } },
  },
};

export const Small = (args) => <Select {...args} />;
Small.args = {
  wrapper: SmallSelect,
};
