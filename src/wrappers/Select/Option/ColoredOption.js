import styled, {css} from 'styled-components';
import {Select} from "antd";

const { Option } = Select;

const ColoredOption = styled(Option)`
  .ant-select-item {
    background-color: blue;
  }
 
`

export default ColoredOption;