import { Input } from 'reactstrap';

import Error from '../components/Error';

export const renderSelect = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input} className="select">
      <option value="">Choose answer...</option>
      <option value="1">1</option>
      <option value="2">2</option>
      ))}
    </select>
    {touched && error && <Error error={error} />}
  </div>
)

export const renderTextField = ({input, meta: { touched, invalid }, ...other}) => {
  return (
    <>
      <Input
        {...input}
        {...other}
        invalid={touched && invalid}
      />
    </>
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
