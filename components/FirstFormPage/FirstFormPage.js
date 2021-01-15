import React from 'react';
import {useSelector} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Button, FormGroup, Label } from 'reactstrap';

import validate from '../../utils/validate'
import { renderTextFieldWithError } from '../../utils/renderField';

import TabContainer from '../TabContainer';
import { firstStepIsCompletedSelector } from './selectors/FirstFormPage.selectors';

const FirstFormPage = ({ handleSubmit }) => {
  const isCompleted = useSelector(firstStepIsCompletedSelector);
  return (
    <TabContainer step={1} title="Signup">
      <form onSubmit={handleSubmit} >
        <div className="p20">
          <FormGroup>
            <Label htmlFor="email" className="label">Email</Label>
            <Field
              name="email"
              component={renderTextFieldWithError}
              type="email"
              id="email"
              placeholder="Enter email"
              readOnly={isCompleted}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password" className="label">Password</Label>
            <Field
              name="password"
              component={renderTextFieldWithError}
              type="password"
              id="password"
              placeholder="Enter password"
              readOnly={isCompleted}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password_confirmation" className="label">Confirm Password</Label>
            <Field
              name="password_confirmation"
              component={renderTextFieldWithError}
              type="password"
              id="password_confirmation"
              placeholder="Password confirmation"
              readOnly={isCompleted}
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
  );
}

export default reduxForm({
  form: 'user',
  destroyOnUnmount: false,
  validate
})(FirstFormPage);
