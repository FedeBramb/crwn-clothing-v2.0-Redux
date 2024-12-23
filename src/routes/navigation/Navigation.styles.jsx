import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  width: 100vw;
  padding: 0 10rem;
  position: fixed !important; 
  top: 0;
  background-color: ${({ $isScrolled, $isHomePage }) =>
    !$isHomePage 
    ? '#2a2a2a' 
    : 
    $isScrolled 
    ? 'white' : 'transparent'};
  height: ${({ $isScrolled }) => ($isScrolled ? '7rem' : '10rem')};
  transition: background-color 1s ease, height 1s ease;
  z-index: 100; 

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
  justify-content: space-between;
  height: 6rem;
  width: 100%;
`

export const NavLink = styled(Link)`
  padding-top: 0.9rem;
  cursor: pointer;
  transition: color 1s ease;
  z-index: 100;
  color: ${({ $isScrolled, $isHomePage }) =>
    !$isHomePage 
    ? 'white' 
    : 
    $isScrolled 
    ? '#2a2a2a' : 'white'};

  &:nth-child(2) { margin-left: auto; }

  @media screen and (max-width: 480px) {
      padding-left: 0.9rem;
    }
`

export const NavbarTitle = styled(Link)`
  transition: font-size 1s ease, top 1s ease, 
    transform 1s ease, color 1s ease, 
    letter-spacing 1s ease;
  font-family: "Cinzel", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;

  &.large {
    position: fixed !important;
    top: 27vh;
    left: 50%;
    transform: translate(-48%, -50%);
    font-size: max(5rem, min(26rem, 16vw));
    color: ${({ $isHomePage }) => $isHomePage ? 'white' : ''};
    letter-spacing: 7rem;

    @media screen and (max-width: 1024px) {
      letter-spacing: 5rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 9rem;
      transform: translate(-50%, -50%);
      top: 20vh;
      letter-spacing: 0;
    }
  }

  &.small {
    position: fixed !important;
    top: 3.65rem;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 5rem;
    color: ${({ $isHomePage }) => $isHomePage ? '#121212' : 'white'};

    @media screen and (max-width: 480px) {
      font-size: 4rem;
      top: 3.9rem;
    }
  }
`;



export const NoImageContainer = styled.div`
  padding-top: 6.95rem; // altezza de
`

// Lasciamo spazio al Nav
export const MainContent = styled.div`
    padding-top: 0;
    height: 100%;
    background-color: #ffffff;
`
