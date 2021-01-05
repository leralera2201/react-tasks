import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import classes from './Header.module.css';

const { Header } = Layout;

const HeaderComponent = () => {
    return (
     <Header className={`header ${classes.headerFlex}`}>
        <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1"><Link to="/">Button</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/typography">Typography</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/dropdown">Dropdown</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/select">Select</Link></Menu.Item>
            <Menu.Item key="5">Switch</Menu.Item>
            <Menu.Item key="6">Modal</Menu.Item>
            <Menu.Item key="7"><Link to="/alert">Alert</Link></Menu.Item>
            <Menu.Item key="8">Notification</Menu.Item>
            <Menu.Item key="9">Progress</Menu.Item>
            <Menu.Item key="10">Spin</Menu.Item>
        </Menu>
        </Header>
    );
};

export default HeaderComponent;