import React, { useEffect, useState } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import HomeImage from '../../components/HomeImage/HomeImage.component.jsx';
import LogInIcon from '../../assets/login.svg?react';
import LogOutIcon from '../../assets/logout.svg?react';
import ShopIcon from '../../assets/shop-icon.svg?react';
import CartIcon from '../../components/CartIcon/CartIcon.component.jsx';
import CartDropdown from '../../components/CartDropdown/CartDropdown.component.jsx';
import FooterBar from '../../components/FooterBar/FooterBar.component.jsx';
import { selectIsCartOpen } from '../../store/cart/cart.selector.js';

import { selectCurrentUser } from '../../store/user/user.selector.js';
import { signOutUser } from '../../utils/firebase/firebase.utils.js';
import { 
  NavigationContainer, 
  NavLinksContainer,
  ShopLink,
  NavLink, 
  NavbarTitle,
  MainContent,
  NoImageContainer
} from './Navigation.styles';

/* Nav, renderizza container con immagine se in Homepage.
 * Animazione del testo, colore, dimensione carattere.
*/
const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isHomePage ? (
        <HomeImage>
          <NavigationContainer className={isScrolled ? 'scrolled' : ''}>
            <ShopLink to='/shop' className={isScrolled ? 'black' : 'white'}>
              <ShopIcon />
            </ShopLink>
            <NavbarTitle to='/' className={isScrolled ? 'small' : 'large'}>
              CROWN
            </NavbarTitle>
            <NavLinksContainer>
              {currentUser ? (
                <NavLink className={isScrolled ? 'black' : 'white'} 
                  onClick={signOutUser}
                >
                  <LogOutIcon />
                </NavLink>
              ) : (
                <NavLink className={isScrolled ? 'black' : 'white'} to='/auth'>
                  <LogInIcon />
                </NavLink>
              )}
              <CartIcon isScrolled={isScrolled} />
            </NavLinksContainer>
            {isCartOpen && <CartDropdown />}
          </NavigationContainer>
        </HomeImage>
      ) : (
        <NoImageContainer>
          <NavigationContainer className='scrolled'>
            <ShopLink to='/shop' className='black'>
              <ShopIcon />
            </ShopLink>
            <NavbarTitle to='/' className='small'>
                CROWN
            </NavbarTitle>
            <NavLinksContainer>
              {currentUser ? (
                <NavLink className='black' onClick={signOutUser}>
                  <LogOutIcon />
                </NavLink>
              ) : (
                <NavLink className='black' to='/auth'>
                  <LogInIcon />
                </NavLink>
              )}
              <CartIcon isScrolled={true} />
            </NavLinksContainer>
            {isCartOpen && <CartDropdown />}
          </NavigationContainer>
        </NoImageContainer>
      )}
      <MainContent>
        <Outlet />
      </MainContent>
      <FooterBar />
    </>
  );
};

export default Navigation;
