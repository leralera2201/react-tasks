import React from "react";
import styled, { css } from "styled-components";
import { Progress } from "antd";
import PropTypes from "prop-types";

const CustomProgress = styled(Progress)`
  ${(props) =>
    props.color === "danger" &&
    css`
      .ant-progress-bg {
        background: #960000;
      }
    `}
  ${(props) =>
    props.color === "success" &&
    css`
      .ant-progress-bg {
        background: #12ae22;
      }
    `}
  ${(props) =>
    props.color === "warning" &&
    css`
      .ant-progress-bg {
        background: #bc9f0b;
      }
    `}
  ${(props) =>
    props.size === "small" &&
    css`
      .ant-progress-bg {
        height: 5px !important;
      }
    `}
  ${(props) =>
    props.size === "large" &&
    css`
      .ant-progress-bg {
        height: 16px !important;
      }
    `}
`;

const ProgressComponent = (props) => <CustomProgress {...props} />;

ProgressComponent.propTypes = {
  size: PropTypes.oneOf(["small", "default", "large"]),
  percent: PropTypes.number,
};

ProgressComponent.defaultTypes = {
  size: "default",
  percent: 50,
};

export default ProgressComponent;
