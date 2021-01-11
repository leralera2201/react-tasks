import styled from "styled-components";
import { Alert } from "antd";

const ErrorAlert = styled(Alert)`
  margin: 10px 5px;
  background: #85040b;
  .ant-alert-message {
    color: white;
  }
`;

export default ErrorAlert;
