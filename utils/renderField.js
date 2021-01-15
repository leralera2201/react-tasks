import { Input } from 'reactstrap';

import Error from '../components/Error';

export const renderSelect = ({ input, meta: { touched, error, invalid }, ...other }) => (
  <>
    <Input
      type="select"
      {...input}
      {...other}
      invalid={touched && invalid}
    >
      <option value="">Choose answer...</option>
      <option value="1">1</option>
      <option value="2">2</option>
    </Input>
    {touched && error && <Error error={error} />}
  </>
)

export const renderTextField = ({input, meta: { touched, invalid }, ...other}) => {
  return (
      <Input
        {...input}
        {...other}
        invalid={touched && invalid}
      />
  )
}

export const renderTextFieldWithError = ({input, meta: { error, touched, invalid }, ...other}) =>  (
  <>
    <Input
      {...input}
      {...other}
      invalid={touched && invalid}
    />
    { error && touched && <Error error={error} /> }
  </>
);
