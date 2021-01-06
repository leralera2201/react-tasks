import styled, {css} from 'styled-components';
import {Select} from "antd";

const SelectSize = styled(Select)`
  ${props => props.large && css`
    .ant-select-selector{
      width: 200px !important;
      font-size: 24px;
    }
  `}
  ${props => props.medium && css`
    .ant-select-selector{
      width: 100px !important;
      font-size: 16px;
    }
  `}
`

export default SelectSize;