import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import { Field } from 'react-final-form';
import PropTypes from 'prop-types';
import Errors from "../Errors";

const FormField = ({ label, name, type }) => {
  return (
    <Field name={name}>
      {({ input, meta: {
          invalid, active, error, submitFailed, visited
      }}) => (
        <FormGroup>
          <Label htmlFor={name}>{label}</Label>
          <Input
            {...input}
            id={name}
            placeholder={label}
            name={name}
            type={type}
            invalid={invalid && !active && (submitFailed || visited)}
          />
          {invalid && !active && (submitFailed || visited) &&
              <Errors errors={Object.values(error)} />
          }
        </FormGroup>
      )}
    </Field>
  );
}

FormField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

export default FormField;
