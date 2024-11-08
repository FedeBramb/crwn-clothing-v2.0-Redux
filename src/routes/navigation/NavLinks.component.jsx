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

const NavLinks = ({ isScrolled, color }) => {
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  return (
    <NavLinksContainer>
      <NavLink to='/shop' className={isScrolled ? 'black' : 'white'}>
        <ShopIcon />
      </NavLink>
      {currentUser ? (
        <NavLink className={isScrolled ? 'black' : 'white'} onClick={signOutUser}>
          <LogOutIcon />
        </NavLink>
      ) : (
        <NavLink className={isScrolled ? 'black' : 'white'} to='/auth'>
          <LogInIcon />
        </NavLink>
      )}
      <CartIcon isScrolled={isScrolled} />
    </NavLinksContainer>
  );
};

export default NavLinks;
