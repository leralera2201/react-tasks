import styled, {css} from 'styled-components';
import {Select} from "antd";

const { Option } = Select;

const ColoredOption = styled(props => <Option {...props}/>)`
  ${props => props.disabled && css`
    background-color: red;
  `}
`

export default ColoredOption;