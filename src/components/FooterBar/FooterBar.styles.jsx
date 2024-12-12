import styled from 'styled-components';

export const Container = styled.div`
  height: 5rem;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4.2rem;
  color: ${({ $textColor }) => $textColor};
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ $textColor }) => $textColor};
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Icon = styled.a`
  color: #fff;
  font-size: 1.2rem;

  &:hover {
    opacity: 0.8;
  }
`;