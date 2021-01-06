import Typography from "@components/Typography";

import WarningTypography from "../../wrappers/Typography/Warning";
import DangerTypography from "../../wrappers/Typography/Danger";
import SuccessTypography from "../../wrappers/Typography/Success";

const TypographyPage = () => {
  return (
    <>
      <Typography>I am default typography</Typography>
      <WarningTypography small>I am small warning typography</WarningTypography>
      <DangerTypography>I am danger typography</DangerTypography>
      <SuccessTypography large>I am large success typography</SuccessTypography>
    </>
  );
};

export default TypographyPage;
