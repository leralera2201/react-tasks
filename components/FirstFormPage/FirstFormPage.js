import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './../../utils/validate'
import {Button, FormGroup, Input, Label} from "reactstrap";
import TabContainer from "../TabContainer";

const FirstFormPage = ({ handleSubmit }) => {
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

  return (
    <TabContainer step={1} title="Signup">
      <form onSubmit={handleSubmit} >
        <div className="p20">
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Field
              name="email"
              component={renderTextField}
              type="email"
              id="email"
              placeholder="Enter email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Field
              name="password"
              component={renderTextField}
              type="password"
              id="password"
              placeholder="Enter password"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password_confirmation">Confirm Password</Label>
            <Field
              name="password_confirmation"
              component={renderTextField}
              type="password"
              id="password_confirmation"
              placeholder="Password confirmation"
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