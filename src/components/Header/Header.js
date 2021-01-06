import React from 'react';
import { Navbar } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';

import './Header.scss';

const Header = () => (
  <Navbar color="dark" dark expand="md" className="h50">
    <div className="container flex-space-between">
      <Link to="/" className="fz30 p0 header-logo color-f">
        Blog
      </Link>
      <NavLink
        exact
        activeClassName="link-active"
        to="/books"
        className="fz20 link"
      >
        Book
      </NavLink>
    </div>
  </Navbar>
);

export default Header;
