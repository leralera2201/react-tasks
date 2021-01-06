import styled, {css} from 'styled-components';
import {Progress} from "antd";

const ColoredProgress = styled(Progress)`
  ${props => props.danger && css`
    .ant-progress-bg {
      background: #960000;
    }
  `}
  ${props => props.sucess && css`
    .ant-progress-bg {
      background: #12ae22;
    }
  `}
  ${props => props.warning && css`
    .ant-progress-bg {
      background: #bc9f0b;
    }
  `}
`;

export default ColoredProgress;