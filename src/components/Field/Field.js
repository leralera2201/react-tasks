import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

const Field = ({ label, name, ...otherProps }) => {
  return (
    <FormGroup>
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} placeholder={label} name={name} {...otherProps} />
    </FormGroup>
  );
};

export default Field;
