import styled, { css } from "styled-components";
import { Progress } from "antd";

const SuccessProgress = styled(Progress)`
  .ant-progress-bg {
    background: #12ae22;
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

export default SuccessProgress;
