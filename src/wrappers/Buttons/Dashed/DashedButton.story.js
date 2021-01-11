import DashedButton from "./DashedButton";

export default {
  title: "Example/Buttons",
  component: DashedButton,
};

export const Dashed = (args) => <DashedButton {...args} />;
Dashed.args = {
  children: "dashed",
};
