import styled from "styled-components";

import ShopBagSvg from '../../assets/shopping-bag.svg?react';

export const IconContainer = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const ShopBagIcon = styled(ShopBagSvg)`
  width: 2.4rem;
  height: 2.4rem;
`


export const ItemCount = styled.span`
  position: absolute;
  font-size: 1rem;
  font-weight: bold;
  bottom: 1.2rem;
`