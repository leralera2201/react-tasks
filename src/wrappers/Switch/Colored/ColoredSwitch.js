import styled, { css } from "styled-components";
import { Switch } from "antd";

const ColoredSwitch = styled((props) => <Switch {...props} />)`
  margin: 10px;
  ${(props) =>
    props.color &&
    css`
      background: ${props.color};
    `}
`;

export default ColoredSwitch;
