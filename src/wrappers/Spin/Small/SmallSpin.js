import styled, { css } from "styled-components";
import { Spin } from "antd";

const SmallSpin = styled(Spin)`
  margin: 10px;
  .ant-spin-dot {
    font-size: 16px;
  }
  .ant-spin-dot-item {
    width: 7px;
    height: 7px;
  }
  ${(props) =>
    props.color &&
    css`
      .ant-spin-dot-item {
        background: ${props.color};
      }
    `}
`;

export default SmallSpin;
