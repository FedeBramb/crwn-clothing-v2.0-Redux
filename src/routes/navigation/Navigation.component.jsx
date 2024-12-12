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
  console.log(isHomePage);
  // Se inHome page && !isScrolled bianco
  // Se inHome page && isScrolled nero
  // se !inHomepage bianco
  const renderNavigationContent = (isScrolled, isHomePage) => (
    <NavigationContainer
      $isScrolled={isScrolled}
      $isHomePage={isHomePage}
    >
      <NavTitle isScrolled={isScrolled} isHomePage={isHomePage} />
      <NavLinks isScrolled={isScrolled} isHomePage={isHomePage} />
      {isCartOpen && <CartDropdown />}
    </NavigationContainer>
  );

  return (
    <>
      {isHomePage ? (
        <HomeImage>
          <ScrollHandler>
            {({ isScrolled }) => renderNavigationContent(isScrolled, isHomePage)}
          </ScrollHandler>
        </HomeImage>
      ) : (
        <NoImageContainer>
          {renderNavigationContent(true, isHomePage)}
        </NoImageContainer>
      )}
      <MainContent>
        <Outlet />
      </MainContent>
      <FooterBar backgroundColor={isHomePage ? 'white' : '#2a2a2a'} textColor={isHomePage ? '#2a2a2a' : 'white'} />
    </>
  );
};

export default Navigation;
