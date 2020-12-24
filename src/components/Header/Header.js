import React from "react";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar color="dark" dark expand="md" className={"h50"}>
      <div className={"container flex-space-between"}>
        <Link to={"/"}>
          <NavbarBrand className={"fz30"}>Blog</NavbarBrand>
        </Link>

        <Link to={"/books"}>
          <NavbarText className={"fz20"}>Book</NavbarText>
        </Link>
      </div>
    </Navbar>
  );
};

export default Header;
