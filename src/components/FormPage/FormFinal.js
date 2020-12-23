import React, { Component } from 'react';
import { Form } from 'react-final-form';
import validators from '../../utils/validator';
import FormField from '../Field';
import { Button } from 'reactstrap';

class FormFinal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
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
      },
    };
  }

  onSubmit = () => {
    Object.values(this.state.fields).forEach(({ label, value }) =>
      console.log(label, ' - ', value),
    );
  };

  render() {
    const { fields } = this.state;
    return (
      <Form
        onSubmit={this.onSubmit}
        validate={(values) => {
          const errors = {};

          Object.keys(fields).forEach((fieldName) => {
            errors[fieldName] = [];
            fields[fieldName].validators.reduce((errorsArray, validator) => {
              const error = validator(values[fieldName] || '');
              if (error) {
                errorsArray.push(error);
              }
              return errorsArray;
            }, errors[fieldName]);

            if(errors[fieldName].length === 0) {
              delete errors[fieldName]
            }
          });

          return errors;
        }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} className={'form'}>
            {Object.entries(fields).map(([fieldName, field]) => (
              <FormField
                key={fieldName}
                type={field.type}
                label={field.label}
                name={fieldName}
              />
            ))}
            <Button disabled={submitting}>Submit</Button>
          </form>
        )}
      />
    );
  }
}

export default FormFinal;
