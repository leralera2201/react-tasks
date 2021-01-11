import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const DropdownItem = ({ wrapper, colorWrapper, ...other }) => {
    const Component = wrapper || Menu;
    const ColorComponent = colorWrapper || Dropdown;
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
        <ColorComponent overlay={menu} trigger={["click"]} {...other}>
            <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                Click me <DownOutlined />
            </a>
        </ColorComponent>
    );
};

export default DropdownItem;
