import React from 'react';
import Switch from "@components/Switch";

import ColoredSwitch from "../../wrappers/Switch/Colored";

const SwitchPage = () => {
    return (
        <div>
            <Switch wrapper={ColoredSwitch} color="red"/>
            <Switch wrapper={ColoredSwitch} color="black"/>
        </div>
    );
};

export default SwitchPage;