import React from "react";

import "./Loader.scss";

const Loader = () => {
  return (
    <div className="flex-center">
      <div className="loader-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loader;
