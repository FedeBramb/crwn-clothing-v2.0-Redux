import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { NavLinksContainer, NavLink } from './Navigation.styles';
import LogInIcon from '../../assets/login.svg?react';
import LogOutIcon from '../../assets/logout.svg?react';
import ShopIcon from '../../assets/shop-icon.svg?react';
import CartIcon from '../../components/CartIcon/CartIcon.component.jsx';
import { selectCurrentUser } from '../../store/user/user.selector.js';
import { signOutUser } from '../../utils/firebase/firebase.utils.js';

const NavLinks = ({ isScrolled, isHomePage }) => {
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  return (
    <NavLinksContainer>
      <NavLink 
        $isScrolled={isScrolled} 
        $isHomePage={isHomePage} 
        to='/shop'
      >
        <ShopIcon aria-label="Shop"/>
      </NavLink>
      {currentUser ? (
        <NavLink 
          onClick={signOutUser}
          $isScrolled={isScrolled} 
          $isHomePage={isHomePage} 
        >
          <LogOutIcon aria-label="Log out" />
        </NavLink>
      ) : (
        <NavLink to='/auth'
          $isScrolled={isScrolled} 
          $isHomePage={isHomePage} 
        >
          <LogInIcon aria-label="Log in" />
        </NavLink>
      )}
      <CartIcon 
        isScrolled={isScrolled} 
        isHomePage={isHomePage} 
      />

    </NavLinksContainer>
  );
};

export default NavLinks;
