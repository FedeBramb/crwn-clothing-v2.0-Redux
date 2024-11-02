import styled from "styled-components";

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from '../Button/Button.styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 38rem;
  height: 45rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: 1px solid black;
  border-radius: 3px;
  background-color: white;
  top: 7rem;
  right: 11rem;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }

  @media screen and (max-width: 480px) {
    width: 98vw;
    right: 0.4rem;
    height: calc(100vh - 12rem);
  }  
`
export const EmptyMessage = styled.span`
  font-size: 1.8rem;
  margin: 5rem auto;
`

export const CartItemsContainer = styled.div`
  height: 35rem;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
`

