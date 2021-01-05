import styled from 'styled-components';
import {Select} from "antd";

const BackgroundSelect = styled(props => <Select {...props}/>)`
  background-color: red;
`

export default BackgroundSelect;