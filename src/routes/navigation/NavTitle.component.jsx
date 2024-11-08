import React from 'react';
import { NavbarTitle } from './Navigation.styles';

const NavTitle = ({ isScrolled, color }) => (
  <NavbarTitle to='/' color={color} className={isScrolled ? 'small' : 'large'}>
    CROWN
  </NavbarTitle>
);

export default NavTitle;
