import WarningTypography from "./WarningTypography";
import { Success } from "../Success/SuccessTypography.story";

export default {
  title: "Example/Typography",
  component: WarningTypography,
};

export const Warning = (args) => <WarningTypography {...args} />;
Warning.args = {
  children: "Warning",
};
