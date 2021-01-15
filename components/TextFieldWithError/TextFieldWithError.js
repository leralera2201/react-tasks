import { Input } from 'reactstrap';

import Error from '../Error';

const TextFieldWithError = ({input, meta: { error, touched, invalid }, ...other}) =>  (
  <>
    <Input
      {...input}
      {...other}
      invalid={touched && invalid}
    />
    { error && touched && <Error error={error} /> }
  </>
);

export default TextFieldWithError;
