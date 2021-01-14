import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Button, FormGroup, Input, Label} from "reactstrap";

import validate from './../../utils/validate'

import TabContainer from "../TabContainer";

const renderTextField = ({input, meta, ...other}) => {
  return (
    <>
      <Input
        {...input}
        {...other}
        invalid={meta.touched && meta.invalid}
      />
      {meta.error && meta.touched && <small className="error">{meta.error}</small>}
    </>
  )
}

const FirstFormPage = ({ handleSubmit, readOnly }) => {

  return (
    <TabContainer step={1} title="Signup">
      <form onSubmit={handleSubmit} >
        <div className="p20">
          <FormGroup>
            <Label htmlFor="email" className="label">Email</Label>
            <Field
              name="email"
              component={renderTextField}
              type="email"
              id="email"
              placeholder="Enter email"
              readOnly={readOnly}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password" className="label">Password</Label>
            <Field
              name="password"
              component={renderTextField}
              type="password"
              id="password"
              placeholder="Enter password"
              readOnly={readOnly}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password_confirmation" className="label">Confirm Password</Label>
            <Field
              name="password_confirmation"
              component={renderTextField}
              type="password"
              id="password_confirmation"
              placeholder="Password confirmation"
              readOnly={readOnly}
            />
          </FormGroup>
        </div>

        <div className="buttons buttons__right">
          <Button
            outline
            color="info"
            type="submit"
          >
            Next
          </Button>
        </div>
      </form>
    </TabContainer>
  )
}

export default reduxForm({
  form: 'user',
  destroyOnUnmount: false,
  validate
})(FirstFormPage)