import React from 'react';

import Button from "@components/Button";
import DashedButton from "../../wrappers/Buttons/Dashed";
import PrimaryButton from "../../wrappers/Buttons/Primary";
import DangerButton from "../../wrappers/Buttons/Danger";

const Buttons = () => {
    return (
        <div>
            <Button>Button</Button>
            <DashedButton>Dashed button</DashedButton>
            <PrimaryButton>Primary Button</PrimaryButton>
            <DangerButton>Danger Button</DangerButton>
        </div>
    );
};

export default Buttons;