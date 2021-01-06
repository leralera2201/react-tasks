import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
}

const SelectItem = ({wrapper, optionWrapper, ...other}) => {
    const Component = wrapper || Select
    const OptionComponent = optionWrapper || Option
    return <>
        <Component defaultValue="lucy" onChange={handleChange} {...other}>
            <OptionComponent value="jack">Jack</OptionComponent>
            <OptionComponent value="lucy">Lucy</OptionComponent>
            <OptionComponent value="disabled" disabled>
                Disabled
            </OptionComponent>
        </Component>
    </>
}

export default SelectItem
