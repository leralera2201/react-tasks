import Dropdown from "@components/Dropdown";

import BorderedMenu from "../../wrappers/Dropdown/Menu";
import ColoredDropdown from "../../wrappers/Dropdown/Colored";

const DropdownPage = () => {
    return (
        <>
            <Dropdown wrapper={BorderedMenu} colorWrapper={ColoredDropdown} color="black"/>
            <Dropdown colorWrapper={ColoredDropdown} color="red"/>
        </>
    );
};

export default DropdownPage;