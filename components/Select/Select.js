import { Input } from "reactstrap";

import Error from "../Error";

const Select = ({ input, meta: { touched, error, invalid }, ...other }) => (
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
);

export default Select;
