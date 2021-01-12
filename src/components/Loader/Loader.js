import React from 'react';

import classes from './Loader.module.scss';

const Loader = () => (
  <div className="flex">
    <div className={classes.loading__ring}>
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

export default Loader;
