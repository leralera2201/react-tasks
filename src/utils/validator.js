import validator from 'validator';

export default {
  requireValidator: (value) => {
    return !validator.isEmpty(value) ? undefined : 'Field is required';
  },
  minLengthValidator: (num) => (value) => {
    return validator.isLength(value, { min: num })
      ? undefined
      : `Min length is ${num}`;
  },
  passwordStrong: (value) => {
    return validator.isStrongPassword(value)
      ? undefined
      : 'Password requires min 1 uppercase, lowercase letter and 1 number';
  },
  dateFormatValidator: (value) => {
    return validator.isDate(value) ? undefined : 'Date is invalid';
  },
};
