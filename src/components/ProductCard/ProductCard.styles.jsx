import styled from "styled-components";

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from '../Button/Button.styles';


export const Image = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 0.5rem;
  border-radius: 5px;
`

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 35rem;
  align-items: center;
  position: relative;
  font-weight: 900;

  ${BaseButton}, ${GoogleSignInButton}, ${InvertedButton} {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 25.5rem;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    ${BaseButton},
    ${GoogleSignInButton},
    ${InvertedButton} {
      opacity: 0.85;
      display: flex;
    }
  }
`

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 1.8rem;

  .name {
    width: 90%;
    margin-bottom: 1.5rem;
  }

  .price {
    width: 10%;
  }
`