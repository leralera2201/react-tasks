import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import { Field } from 'react-final-form';
import PropTypes from 'prop-types';
import Errors from "../Errors";

const FormField = ({ label, name, type }) => {
  return (
    <Field name={name}>
      {({ input, meta }) => (
        <FormGroup>
          <Label htmlFor={name}>{label}</Label>
          <Input
            {...input}
            id={name}
            placeholder={label}
            name={name}
            type={type}
            invalid={meta.invalid && !meta.active && (meta.submitFailed || meta.visited)}
          />
          {meta.invalid && !meta.active && (meta.submitFailed || meta.visited) &&
              <Errors errors={Object.values(meta.error)} />
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
