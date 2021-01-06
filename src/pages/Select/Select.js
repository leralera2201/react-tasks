import React from 'react';

import Select from "@components/Select";

import SelectSize from "../../wrappers/Select/SelectSize";
import ColoredOption from "../../wrappers/Select/Option";

const SelectPage = () => {
    return (
        <div>
            <div>
                <Select />
            </div>
            <br/>
            <div>
                <Select wrapper={SelectSize} large/>
            </div>
            <br/>
            <div>
                <Select wrapper={SelectSize} medium optionWrapper={ColoredOption}/>
            </div>
        </div>
    );
};

export default SelectPage;