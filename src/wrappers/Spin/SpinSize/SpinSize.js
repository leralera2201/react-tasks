import styled, { css } from "styled-components";
import { Spin } from "antd";

const SpinSize = styled((props) => <Spin {...props} />)`
  margin: 10px;
  ${(props) =>
    props.large &&
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
    props.small &&
    css`
      .ant-spin-dot {
        font-size: 16px;
      }
      .ant-spin-dot-item {
        width: 7px;
        height: 7px;
      }
    `}
`;

export default SpinSize;
