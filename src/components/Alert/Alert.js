import React from "react";
import styled, { css } from "styled-components";
import { Alert } from "antd";
import PropTypes from "prop-types";

const CustomAlert = styled(Alert)`
  margin: 10px 5px;
  ${(props) =>
    props.type === "success" &&
    css`
      background: #5cff21;
    `}
  ${(props) =>
    props.type === "error" &&
    css`
      background: #85040b;
      .ant-alert-message {
        color: white;
      }
    `}
  ${(props) =>
    props.type === "warning" &&
    css`
      background: #ffd18e;
    `}
  ${(props) =>
    props.type === "info" &&
    css`
      background: #a7dcff;
    `}
`;

const AlertComponent = (props) => <CustomAlert {...props} />;

AlertComponent.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["error", "success", "warning", "info"]),
  showIcon: PropTypes.bool,
};

export default AlertComponent;
