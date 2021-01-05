import styled, {css} from 'styled-components';
import {Dropdown} from "antd";

const ColoredDropdown = styled((props => <Dropdown {...props} />))`
  display: block;
  width: 150px;
  ${props => props.color && css`
    color: ${props.color};
      &:hover {
        color: ${props.color};
      }
  `}
`;

export default ColoredDropdown;