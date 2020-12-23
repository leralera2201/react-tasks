import React, { Component } from 'react';
import { Button, Form } from 'reactstrap';

import validators from '../../utils/validator';

import Field from '../Field';

const fields = {
  username: {
    label: 'Username',
    type: 'text',
    value: '',
    errors: [],
    validators: [
      validators.requireValidator,
      validators.minLengthValidator(10),
    ],
    dirty: false,
    focused: false,
  },
  password: {
    label: 'Password',
    type: 'password',
    value: '',
    errors: [],
    validators: [
      validators.requireValidator,
      validators.passwordStrong,
      validators.minLengthValidator(10),
    ],
    dirty: false,
    focused: false,
  },
  confirmPassword: {
    label: 'Confirm Password',
    type: 'password',
    value: '',
    errors: [],
    validators: [
      validators.requireValidator,
      validators.passwordStrong,
      validators.minLengthValidator(10),
    ],
    dirty: false,
    focused: false,
  },
  dateOfBirth: {
    label: 'Date Of Birth',
    type: 'date',
    value: '',
    errors: [],
    validators: [validators.dateFormatValidator],
    dirty: false,
    focused: false,
  },
};

class FormPage extends Component {
  constructor(props) {
    super(props);
    this.state = { fields };
  }

  changeHandler = (event) => {
    const { name, value } = event.target;
    const errors = this.validateField(name, value);
    const { fields } = this.state;
    fields[name] = { ...fields[name], value, dirty: true, errors };

    this.setState({ fields });
  };

  validateField = (name, value) => {
    const { validators } = { ...this.state.fields[name] };
    const errors = validators.reduce((errorsArray, validator) => {
      const error = validator(value);
      if(error) {
        errorsArray.push(error);
      }
      return errorsArray;
    }, [])
    this.validateConfirmPassword(name, value, errors);

    return errors;
  };

  validateConfirmPassword = (name, value, errors) => {
    if (name === 'confirmPassword') {
      errors.push(this.matchPassword(value));
    }
  };

  matchPassword = (value) => {
    return value === this.state.fields.password.value
      ? null
      : 'Password dont match';
  };

  focusHandler = (event) => {
    const { name } = event.target;
    const { fields } = this.state;
    fields[name] = { ...fields[name], focused: true };

    this.setState({ fields });
  };

  blurHandler = (event) => {
    const { name, value } = event.target;
    const { fields } = this.state;
    const errors = this.validateField(name, value);
    fields[name] = { ...fields[name], focused: false, errors };

    this.setState({ fields });
  };

  validateBeforeSubmit = () => {
    const { fields } = this.state;
    Object.entries(fields).forEach(([fieldName, field]) => {
      if (!field.dirty) {
        const errors = this.validateField(fieldName, field.value);
        fields[fieldName] = { ...fields[fieldName], errors };
        this.setState({ fields });
      }
    });
  };

  submitHandler = () => {
    this.validateBeforeSubmit();
    Object.values(this.state.fields).forEach(({ label, value }) =>
      console.log(label, ' - ', value),
    );
  };

  render() {
    const { fields } = this.state;

    return (
      <Form className={'form'}>
        {Object.entries(fields).map(([fieldName, field]) => (
          <Field
            key={fieldName}
            type={field.type}
            label={field.label}
            name={fieldName}
            value={field.value}
            data={field}
            onFocus={this.focusHandler}
            onChange={this.changeHandler}
            onBlur={this.blurHandler}
          />
        ))}
        <Button onClick={this.submitHandler}>Submit</Button>
      </Form>
    );
  }
}

export default FormPage;
