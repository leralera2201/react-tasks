const validate = values => {
  const errors = {}
  if (!values.password) {
    errors.password = 'Required'
  }
  if (!values.password_confirmation) {
    errors.password_confirmation = 'Required'
  } else if (values.password && values.password_confirmation !== values.password) {
    errors.password = 'Passwords must be the same'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.sex) {
    errors.sex = 'Required'
  }
  return errors
}

export default validate