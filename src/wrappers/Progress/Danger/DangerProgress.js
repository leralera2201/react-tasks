import styled, { css } from "styled-components";
import { Progress } from "antd";

const DangerProgress = styled(Progress)`
  .ant-progress-bg {
    background: #960000;
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

export default DangerProgress;
