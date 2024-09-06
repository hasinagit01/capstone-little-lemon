// NavItem.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ to, children, onClick }) => (
  <li onClick={onClick}>
    <NavLink to={to} className="nav-item">
      {children}
    </NavLink>
  </li>
);

export default NavItem;
