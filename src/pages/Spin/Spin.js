import Spin from "@components/Spin";

import classes from "./Spin.module.scss";

const SpinPage = () => {
  return (
    <>
      <div className={classes.flexContainer}>
        <Spin />
      </div>
      <div className={classes.flexContainer}>
        <Spin size="large" />
      </div>
      <div className={classes.flexContainer}>
        <Spin size="small" color="black" />
      </div>
    </>
  );
};

export default SpinPage;
