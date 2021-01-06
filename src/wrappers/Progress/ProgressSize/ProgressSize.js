import styled, { css } from "styled-components";

import ColoredProgress from "../Colored";

const ProgressSize = styled(ColoredProgress)`
  ${(props) =>
    props.small &&
    css`
      .ant-progress-bg {
        height: 5px !important;
      }
    `}
  ${(props) =>
    props.large &&
    css`
      .ant-progress-bg {
        height: 16px !important;
      }
    `}
`;

export default ProgressSize;
