import { Switch } from "antd";
import styled, { css } from "styled-components";

const Large = styled(Switch)`
  margin: 10px;
  width: 70px;
  ${(props) =>
    props.color &&
    css`
      background: ${props.color};
    `}
`;

export default Large;
