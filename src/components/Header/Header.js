import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar color="dark" dark expand="md" className="h50">
      <div className="container flex-space-between">
        <Link to={"/"}>
          <NavbarBrand className="fz30 p0">Blog</NavbarBrand>
        </Link>
        <NavLink
          exact
          activeClassName="active-link"
          to="/books"
          className="fz20 link"
        >
          Book
        </NavLink>
      </div>
    </Navbar>
  );
};

export default Header;
