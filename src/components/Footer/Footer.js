import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Navbar color="dark" dark expand="md" className={"flex-center h50"}>
      <Link to={"/"}>
        <NavbarBrand className={"fz30"}>Blog</NavbarBrand>
      </Link>
    </Navbar>
  );
};

export default Footer;
