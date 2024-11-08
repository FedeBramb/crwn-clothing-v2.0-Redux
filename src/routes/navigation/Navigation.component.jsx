import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import HomeImage from '../../components/HomeImage/HomeImage.component.jsx';
import CartDropdown from '../../components/CartDropdown/CartDropdown.component.jsx';
import FooterBar from '../../components/FooterBar/FooterBar.component.jsx';
import ScrollHandler from './ScrollHandler.component.jsx';
import NavLinks from './NavLinks.component.jsx';
import NavTitle from './NavTitle.component.jsx';

import { selectIsCartOpen } from '../../store/cart/cart.selector.js';
import { NavigationContainer, NoImageContainer, MainContent } from './Navigation.styles';

const Navigation = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      {isHomePage ? (
        <HomeImage>
          <ScrollHandler>
            {({ isScrolled }) => (
              <NavigationContainer className={isScrolled ? 'scrolled' : ''}>
                <NavTitle color={'black'} isScrolled={isScrolled} />
                <NavLinks isScrolled={isScrolled} />
                {isCartOpen && <CartDropdown />}
              </NavigationContainer>
            )}
          </ScrollHandler>
        </HomeImage>
      ) : (
        <NoImageContainer>
          <NavigationContainer className='scrolled inverted-color'>
            <NavTitle color={'white'} isScrolled />
            <NavLinks isScrolled={false} />
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
