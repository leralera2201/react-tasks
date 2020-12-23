import React from "react";
import { FormFeedback } from "reactstrap";

const Errors = ({ errors }) => {
  return (
    errors.map((error, index) => (
      <FormFeedback key={`error-key-${index}`}>{error}</FormFeedback>
    ))
  );
};

export default Errors;