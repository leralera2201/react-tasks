import React from 'react';

import Button from "@components/Button";
import Typography from "@components/Typography";
import Dropdown from "@components/Dropdown";
import Select from "@components/Select";

import DashedButton from "./wrappers/Buttons/Dashed/DashedButton";
import PrimaryButton from "./wrappers/Buttons/Primary";
import DangerButton from "./wrappers/Buttons/Danger";
import WarningTypography from "./wrappers/Typography/Warning";
import SuccessTypography from "./wrappers/Typography/Success";
import DangerTypography from "./wrappers/Typography/Danger";


function App() {
  return (
    <div className="App">
        <Button>Button</Button>
        <DashedButton>Dashed button</DashedButton>
        <PrimaryButton>Primary Button</PrimaryButton>
        <DangerButton>Danger Button</DangerButton>
        <Typography>I am default typography</Typography>
        <WarningTypography small>I am small warning typography</WarningTypography>
        <DangerTypography>I am danger typography</DangerTypography>
        <SuccessTypography large>I am large success typography</SuccessTypography>
        <Dropdown />
        <Select />
    </div>
  );
}

export default App;
