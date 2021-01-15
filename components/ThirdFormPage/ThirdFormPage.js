import React from 'react';
import { Button } from 'reactstrap';
import { reduxForm } from 'redux-form';
import clsx from 'clsx';

import validate from '../../utils/validate';

import TabContainer from '../TabContainer';

import styles from './ThirdFormPage.module.scss';

const ThirdFormPage = ({ handleSubmit }) => (
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
);

export default reduxForm({
  form: 'user',
  destroyOnUnmount: false,
  validate,
})(ThirdFormPage);
