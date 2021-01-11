import DangerTypography from "./DangerTypography";

export default {
  title: "Example/Typography",
  component: DangerTypography,
};

export const Danger = (args) => <DangerTypography {...args} />;
Danger.args = {
  children: "Danger",
};
