import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer =  styled.div`
  height: 12rem;
  width: calc(100vw - 17px); // Meno la scrollbar
  padding: 0 10rem;
  position: fixed;
  top: 0;
  background-color: transparent;
  transition: background-color 1s ease, height 1.2s ease;
  z-index: 100;
  display: flex;
  justify-content: space-between;

  &.scrolled {
    background-color: rgba(255, 255, 255, 1);
    height: 7rem;
  }

  @media screen and (max-width: 1024px) {
    padding: 0 2rem;
  }

  @media screen and (max-width: 480px) {
    padding: 0;
    width: 100vw;
  }
`

export const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 7rem;
`

export const NavLink = styled(Link)`
  padding-top: 0.9rem;
  cursor: pointer;
  transition: color 1s ease;
  z-index: 100;
  
  &.black {
    color: black;
  }

  &.white {
    color: white;
  }

  @media screen and (max-width: 480px) {
      padding-left: 0.9rem;
    }
`

export const ShopLink = styled(NavLink)`
  margin-top: 1.2rem;
`

export const NavbarTitle = styled(Link)`
  transition: font-size 1s ease, top 1s ease, transform 1s ease, color 1s ease, letter-spacing 1s ease; /* Aggiunta la transizione del colore */
  font-family: "Cinzel", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  
  &.large {
    position: fixed;
    top: 27vh;
    left: 50%;
    transform: translate(-48%, -50%);
    font-size: max(5rem, min(26rem, 16vw));
    color: white;
    letter-spacing: 7rem;

    @media screen and (max-width: 480px) {
      font-size: 9rem;
      transform: translate(-50%, -50%);
      top: 20vh;
      letter-spacing: 0;
    }
  }

  &.small {
    position: fixed;
    top: 3.8rem;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 5rem;
    color: black;

    @media screen and (max-width: 480px) {
      font-size: 4rem;
      top: 3.9rem;
    }
  }
`;

export const NoImageContainer = styled.div`
  padding-top: 2rem;
`

// Lasciamo spazio al Nav
export const MainContent = styled.div`
    padding-top: 7rem;
    padding-bottom: 5rem;
`
