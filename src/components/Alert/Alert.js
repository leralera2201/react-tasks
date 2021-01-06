import React from "react";
import { Alert } from "reactstrap";

import "./Alert.scss";

const AlertItem = ({ color, message }) => {
  return <Alert color={color}>{message}</Alert>;
};

export default AlertItem;
