import validator from 'validator';

export default {
  requireValidator: (value) => {
    return !validator.isEmpty(value) ? null : 'Field is required';
  },
  minLengthValidator: (num) => (value) => {
    return validator.isLength(value, { min: num })
      ? null
      : `Min length is ${num}`;
  },
  passwordStrong: (value) => {
    return validator.isStrongPassword(value)
      ? null
      : 'Password requires min 1 uppercase, lowercase letter and 1 number';
  },
  dateFormatValidator: (value) => {
    return validator.isDate(value) ? null : 'Date is invalid';
  },
};
