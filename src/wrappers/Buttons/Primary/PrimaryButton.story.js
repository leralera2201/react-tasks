import PrimaryButton from "./PrimaryButton";

export default {
  title: "Example/Buttons",
  component: PrimaryButton,
};

export const Primary = (args) => <PrimaryButton {...args} />;
Primary.args = {
  children: "primary",
};
