import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './../../utils/validate'
import {Button, FormGroup, Input, Label} from "reactstrap";
import TabContainer from "../TabContainer";
import styles from './SecondFormPage.module.scss';

const SecondFormPage = ({ handleSubmit, previousPage }) => {
  const renderTextField = ({input, meta, ...other}) => {
    return (
      <>
        <Input
          {...input}
          {...other}
          invalid={meta.touched && meta.invalid}
        />
        {meta.error && meta.touched && <small className={styles.error}>{meta.error}</small>}
      </>
    )
  }

  return (
    <TabContainer step={2} title="Add info">
      <form onSubmit={handleSubmit}>
        <div className="p20">
          <div>
            <label>Sex</label>
            <div className={styles.checkbox__wrapper}>
              <label className={styles.checkbox__item}>
                <Field
                  name="sex"
                  component={"input"}
                  type="radio"
                  value="male"
                  className={styles.checkbox__input}
                /> Male
              </label>
              <label className={styles.checkbox__item}>
                <Field
                  name="sex"
                  component={"input"}
                  type="radio"
                  value="female"
                  className={styles.checkbox__input}
                /> Female
              </label>
              <label className={styles.checkbox__item}>
                <Field
                  name="sex"
                  component={"input"}
                  type="radio"
                  value="unspecified"
                  className={styles.checkbox__input}
                /> Unspecified
              </label>
              <Field name="sex" component={sex =>  sex.error ? <span>{sex.error}</span> : null}/>
            </div>
          </div>
          <FormGroup>
            <Label >Where did you hear about us?</Label>
            <Field name="select" component={field =>
              <select {...field} className={styles.select}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            } />

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
}

export default reduxForm({
  form: 'user',
  destroyOnUnmount: false,
  validate
})(SecondFormPage)