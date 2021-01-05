import styled, { css } from 'styled-components';
import {Alert} from "antd";

const ColoredAlert = styled(Alert)`
  margin: 10px 5px;
  ${props => props.type === "success" && css`
    background: #5cff21;
  `} 
  ${props => props.type === "error" && css`
    background: #85040b;
    .ant-alert-message{
      color: white;
    }
  `}
  ${props => props.type === "warning" && css`
    background: #ffab2e;
  `}
  ${props => props.type === "info" && css`
    background: #a7dcff;
  `}
`;

export default ColoredAlert;