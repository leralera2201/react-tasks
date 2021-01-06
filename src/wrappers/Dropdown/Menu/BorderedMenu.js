import styled from "styled-components";
import { Menu } from "antd";

const BorderedMenu = styled((props) => <Menu {...props} />)`
  border: 1px solid black;
`;

export default BorderedMenu;
