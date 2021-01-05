import React from 'react';
import { Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import ColoredDropdown from "../../wrappers/Dropdown/Colored";

const DropdownItem = ({wrapper, colorWrapper}) => {
    const Component = wrapper;
    const ColorComponent = colorWrapper;
    const menu = (<Component>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                1st menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                2nd menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                3rd menu item
            </a>
        </Menu.Item>
    </Component>
    );
    return (
        <ColorComponent overlay={menu} trigger={['click']} color="black">
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                Hover me <DownOutlined />
            </a>
        </ColorComponent>
    );
};

export default DropdownItem;