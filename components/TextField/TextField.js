import { Input } from "reactstrap";

const TextField = ({input, meta: { touched, invalid }, ...other}) => (
  <Input
    {...input}
    {...other}
    invalid={touched && invalid}
  />
);

export default TextField;
