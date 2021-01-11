import styled, { css } from "styled-components";
import { Spin } from "antd";

const LargeSpin = styled(Spin)`
  margin: 10px;
  .ant-spin-dot {
    font-size: 30px;
  }
  .ant-spin-dot-item {
    width: 14px;
    height: 14px;
  }
  ${(props) =>
    props.color &&
    css`
      .ant-spin-dot-item {
        background: ${props.color};
      }
    `}
`;

export default LargeSpin;
