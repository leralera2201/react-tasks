import React from 'react';
import {Spin} from "antd";

import classes from './Spin.module.css';
import SpinSize from "../../wrappers/Spin/SpinSize";

const SpinPage = () => {
    return (
        <div>
            <div className={classes.flexContainer}>
                <Spin />
            </div>
            <div className={classes.flexContainer}>
                <SpinSize large />
            </div>
            <div className={classes.flexContainer}>
                <SpinSize small />
            </div>
        </div>
    );
};

export default SpinPage;