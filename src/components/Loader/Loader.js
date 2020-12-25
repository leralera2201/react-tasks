import React from "react";

const Loader = () => {
  return (
    <div className="flex-center">
      <div className="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loader;
