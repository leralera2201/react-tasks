import { Spin } from "antd";

import SpinSize from "../../wrappers/Spin/SpinSize";

import classes from "./Spin.module.scss";

const SpinPage = () => {
  return (
    <>
      <div className={classes.flexContainer}>
        <Spin />
      </div>
      <div className={classes.flexContainer}>
        <SpinSize large />
      </div>
      <div className={classes.flexContainer}>
        <SpinSize small />
      </div>
    </>
  );
};

export default SpinPage;
