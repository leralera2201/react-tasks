import moment from 'moment';

const validate = values => {
  const errors = {}
  if (!values.password) {
    errors.password = 'Required';
  } else if(values.password.length < 6) {
    errors.password = 'Minimum 6 symbols required';
  }

  if (!values.password_confirmation) {
    errors.password_confirmation = 'Required';
  } else if (values.password && values.password_confirmation !== values.password) {
    errors.password_confirmation = 'Passwords must be the same';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.sex) {
    errors.sex = 'Required';
  }

  if (!values.hearFrom) {
    errors.hearFrom = 'Required';
  }

  const currentYear = new Date().getFullYear();
  const date = `${values.day || 0}-${values.month || 0}-${values.year || 0}`;
  const isValid = moment(date,  "DD-MM-YYYY").isValid();

  if(
    !values.year
    || values.year < currentYear - 100
    || values.year > currentYear
  ) {
    errors.date = 'Invalid date';
    errors.year = 'Invalid year';
  };

  if(
    !values.month
    || values.month < 1
    || values.month > 12
  ) {
    errors.date = 'Invalid date';
    errors.month = 'Invalid year';
  };

  if(
    !values.day
    || values.day < 1
    || values.day > 31
  ) {
    errors.date = 'Invalid date';
    errors.day = 'Invalid year';
  };

  if(!isValid) {
    errors.date = 'Invalid date';
  };

  return errors;
};

export default validate;
