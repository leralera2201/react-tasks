import React from 'react';

import Dropdown from "@components/Dropdown";

import BorderedMenu from "../../wrappers/Dropdown/Menu";
import ColoredDropdown from "../../wrappers/Dropdown/Colored";

const DropdownPage = () => {
    return (
        <div>
            <Dropdown wrapper={BorderedMenu} colorWrapper={ColoredDropdown}/>
        </div>
    );
};

export default DropdownPage;