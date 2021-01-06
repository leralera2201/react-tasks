import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import clsx from "clsx";

import classes from "./Header.module.scss";

const { Header } = Layout;
const { Item } = Menu;

const HeaderComponent = () => {
  return (
    <Header className={clsx("header", classes.headerFlex)}>
      <Menu theme="dark" mode="horizontal">
        <Item>
          <Link to="/">Button</Link>
        </Item>
        <Item>
          <Link to="/typography">Typography</Link>
        </Item>
        <Item>
          <Link to="/dropdown">Dropdown</Link>
        </Item>
        <Item>
          <Link to="/select">Select</Link>
        </Item>
        <Item>
          <Link to="/switch">Switch</Link>
        </Item>
        <Item>
          <Link to="/modal">Modal</Link>
        </Item>
        <Item>
          <Link to="/alert">Alert</Link>
        </Item>
        <Item>
          <Link to="/notification">Notification</Link>
        </Item>
        <Item>
          <Link to="/progress">Progress</Link>
        </Item>
        <Item>
          <Link to="/spin">Spin</Link>
        </Item>
      </Menu>
    </Header>
  );
};

export default HeaderComponent;
