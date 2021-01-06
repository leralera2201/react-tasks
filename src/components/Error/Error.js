import React from 'react';
import { Alert } from 'reactstrap';

const Error = ({ error }) => (
  <Alert color="danger">{error}</Alert>
);

export default Error;
