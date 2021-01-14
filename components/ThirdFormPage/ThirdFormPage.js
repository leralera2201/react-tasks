import React from 'react'
import { reduxForm } from 'redux-form'
import validate from './../../utils/validate'
import {Button} from "reactstrap";
import styles from "./ThirdFormPage.module.scss";
import TabContainer from "../TabContainer";
import clsx from "clsx";

const ThirdFormPage = ({ handleSubmit }) => {

  return (
    <TabContainer step={3} title="Success">
      <form onSubmit={handleSubmit}>
        <div className={clsx('p20', styles.success__wrapper)}>
          <div className={styles.tick}>&#10003;</div>
          <Button
            outline
            color="info"
            type="submit"
          >
            Go to dashboard
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
})(ThirdFormPage)