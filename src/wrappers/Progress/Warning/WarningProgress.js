import styled, { css } from "styled-components";
import { Progress } from "antd";

const WarningProgress = styled(Progress)`
  .ant-progress-bg {
    background: #bc9f0b;
  }
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
        height: 20px !important;
      }
    `}
`;

export default WarningProgress;
