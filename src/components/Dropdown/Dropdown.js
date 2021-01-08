import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import styled from "styled-components";
import PropTypes from "prop-types";

const CustomDropdown = styled(Dropdown)`
  margin: 10px;
  display: block;
  width: 150px;
`;

const BorderedMenu = styled(Menu)`
  border: 1px solid black;
`;

const DropdownItem = ({ color, bordered, ...other }) => {
  const Component = bordered ? BorderedMenu : Menu;
  const menu = (
    <Component>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.taobao.com/"
        >
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.tmall.com/"
        >
          3rd menu item
        </a>
      </Menu.Item>
    </Component>
  );
  return (
    <CustomDropdown overlay={menu} trigger={["click"]} {...other}>
      <a
        className="ant-dropdown-link"
        onClick={(e) => e.preventDefault()}
        style={color && { color }}
      >
        Click me <DownOutlined />
      </a>
    </CustomDropdown>
  );
};

DropdownItem.propTypes = {
  bordered: PropTypes.bool,
  color: PropTypes.string,
};

export default DropdownItem;
