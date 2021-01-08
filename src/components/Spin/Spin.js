import React from "react";
import styled, { css } from "styled-components";
import { Spin } from "antd";
import PropTypes from "prop-types";

const CustomSpin = styled(Spin)`
  margin: 10px;
  ${(props) =>
    props.size === "large" &&
    css`
      .ant-spin-dot {
        font-size: 30px;
      }
      .ant-spin-dot-item {
        width: 14px;
        height: 14px;
      }
    `}
  ${(props) =>
    props.size === "small" &&
    css`
      .ant-spin-dot {
        font-size: 16px;
      }
      .ant-spin-dot-item {
        width: 7px;
        height: 7px;
      }
    `}
  ${(props) =>
    props.color &&
    css`
      .ant-spin-dot-item {
        background: ${props.color};
      }
    `}
`;

const SpinComponent = (props) => <CustomSpin {...props} />;

SpinComponent.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(["small", "default", "large"]),
};

export default SpinComponent;
