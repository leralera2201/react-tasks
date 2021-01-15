import React, { useState } from 'react';
import { Button, Col, FormGroup, Label } from 'reactstrap';
import { connect, useSelector } from "react-redux";
import { Field, formValueSelector, reduxForm } from 'redux-form';
import clsx from 'clsx';

import validate from '../../utils/validate';
import { renderSelect, renderTextField } from '../../utils/renderField';

import TabContainer from '../TabContainer';
import Error from '../Error';

import { secondStepIsCompletedSelector } from './selectors/secondFormPage.selectors';
import styles from './SecondFormPage.module.scss';

const sex = {
  male: {
    label: 'Male',
  },
  female: {
    label: 'Female',
  },
  unspecified: {
    label: 'Unspecified',
  },
};

let SecondFormPage = ({ handleSubmit, previousPage, sex: activeSex }) => {
  const [dateError, setDateError] = useState(false);
  const isCompleted = useSelector(secondStepIsCompletedSelector);

  const showDateError = () => {
    setDateError(true);
  };

  return (
    <TabContainer step={2} title="Add info">
      <form onSubmit={handleSubmit}>
        <div className="p20">
          <Label className="label label-center">Date of Birth</Label>
          <div>
            <FormGroup row className={styles.date}>
              <Col sm={4} className={styles.date__item}>
                <Field
                  name="day"
                  component={renderTextField}
                  type="text"
                  placeholder="DD"
                  onChange={showDateError}
                  readOnly={isCompleted}
                />
              </Col>
              <Col sm={4} className={styles.date__item}>
                <Field
                  name="month"
                  component={renderTextField}
                  type="text"
                  placeholder="MM"
                  onChange={showDateError}
                  readOnly={isCompleted}
                />
              </Col>
              <Col sm={4} className={styles.date__item}>
                <Field
                  name="year"
                  component={renderTextField}
                  type="text"
                  placeholder="YYYY"
                  onChange={showDateError}
                  readOnly={isCompleted}
                />
              </Col>
            </FormGroup>
            <Field
              name="date"
              component={field => (
                (dateError && field.meta.error) ? <Error error={field.meta.error}/> : null
              )}
            />
          </div>
          <div>
            <Label className="label label-center">Sex</Label>
            <div className={styles.checkbox__wrapper}>
            {Object.entries(sex)
              .map(([fieldName, field]) =>
                <label
                  key={fieldName}
                  className={
                    clsx(styles.checkbox__item,
                        activeSex === fieldName && styles.checkbox__item__active
                    )}
                >
                  <Field
                    name="sex"
                    component="input"
                    type="radio"
                    disabled={isCompleted}
                    value={fieldName}
                    className={styles.checkbox__input}
                  /> {field.label}
                </label>
            )}
            </div>
            <Field
              name="sex"
              component={field => (
                (field.meta.touched && field.meta.error) ? <Error error={field.meta.error}/> : null
              )}
            />
          </div>
          <FormGroup>
            <Label className="label label-center">Where did you hear about us?</Label>
            <Field
              name="hearFrom"
              component={renderSelect}
              disabled={isCompleted}
            />
          </FormGroup>
        </div>
        <div className="buttons">
          <Button
            type="button"
            outline
            color="secondary"
            onClick={previousPage}
          >
            Prev
          </Button>
          <Button
            type="submit"
            outline
            color="info"
          >
            Next
          </Button>
        </div>
      </form>
    </TabContainer>
  )
};

SecondFormPage = reduxForm({
  form: 'user',
  destroyOnUnmount: false,
  validate,
})(SecondFormPage);

const selector = formValueSelector('user')
SecondFormPage = connect(state => {
  const sex = selector(state, 'sex')
  return {
    sex,
  }
})(SecondFormPage);

export default SecondFormPage;
