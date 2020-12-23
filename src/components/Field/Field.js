import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import PropTypes from 'prop-types';
import Errors from "../Errors";

const Field = ({ label, name, data: { errors, focused }, ...otherProps }) => {
  return (
    <FormGroup>
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        placeholder={label}
        name={name}
        invalid={!focused && errors.length > 0}
        {...otherProps}
      />
      {!focused &&
        errors.length > 0 && <Errors errors={errors}/> }
    </FormGroup>
  );
};

Field.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  data: PropTypes.shape({
    errors: PropTypes.arrayOf(PropTypes.string),
    dirty: PropTypes.bool,
    focused: PropTypes.bool,
  }),
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

export default Field;
