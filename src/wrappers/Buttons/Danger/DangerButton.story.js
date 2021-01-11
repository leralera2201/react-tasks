import DangerButton from "./DangerButton";

export default {
  title: "Example/Buttons",
  component: DangerButton,
};

export const Danger = (args) => <DangerButton {...args} />;
Danger.args = {
  children: "Danger",
};
