import React from 'react';
import { Navbar } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => (
  <Navbar color="dark" dark expand="md" className="flex-center h50">
    <Link to="/" className="fz30 color-f">
      Blog
    </Link>
  </Navbar>
);

export default Footer;
