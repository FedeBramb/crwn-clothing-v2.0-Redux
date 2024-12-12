import React from 'react';
import { NavbarTitle } from './Navigation.styles';

const NavTitle = ({ isScrolled, isHomePage }) => (
  <NavbarTitle to='/' className={isScrolled ? 'small' : 'large'} $isHomePage={isHomePage}>
    CROWN
  </NavbarTitle>
);

export default NavTitle;
