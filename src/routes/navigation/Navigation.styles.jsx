import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 7rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;
`

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 10rem;
  margin-left: 1.4rem;
`

export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const NavLink = styled(Link)`
  padding: 1rem 1.5rem;
  cursor: pointer;
`
