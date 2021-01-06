import React from 'react';

function onChange(checked) {
    console.log(`switch to ${checked}`);
}

const SwitchItem = ({wrapper, color}) => {
    const ComponentWrapper = wrapper;
    return (
        <ComponentWrapper defaultChecked onChange={onChange} color={color}/>
    );
};

export default SwitchItem;