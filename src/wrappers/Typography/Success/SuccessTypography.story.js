import SuccessTypography from "./SuccessTypography";
import { Danger } from "../Danger/DangerTypography.story";

export default {
  title: "Example/Typography",
  component: SuccessTypography,
};

export const Success = (args) => <SuccessTypography {...args} />;
Success.args = {
  children: "Success",
};
