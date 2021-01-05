import React from 'react';

import ColoredAlert from "../../wrappers/Alert/ColoredAlert";

const Alert = () => {
    return (
        <div>
            <ColoredAlert type="success" message="Success Alert" showIcon />
            <ColoredAlert type="error" message="Error Alert" showIcon />
            <ColoredAlert type="info" message="Info Alert"/>
            <ColoredAlert type="warning" message="Warning Alert"/>
        </div>
    );
};

export default Alert;