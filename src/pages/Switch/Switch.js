import Switch from "@components/Switch";

import ColoredSwitch from "../../wrappers/Switch/Colored";

const SwitchPage = () => {
    return (
        <>
            <Switch wrapper={ColoredSwitch} color="red"/>
            <Switch wrapper={ColoredSwitch} color="black"/>
        </>
    );
};

export default SwitchPage;