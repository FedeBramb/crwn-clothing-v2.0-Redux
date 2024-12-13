import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector'
import { setIsCartOpen } from '../../store/cart/cart.action';

import { IconContainer, ShopBagIcon, ItemCount } from './CartIcon.styles';


const CartIcon = ({isScrolled, isHomePage}) => {
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toogleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
  console.log(isScrolled, isHomePage)
  return (
    <IconContainer>
        <ShopBagIcon
          aria-label="Apri carrello"
          onClick={toogleIsCartOpen}
          $isScrolled={isScrolled}
          $isHomePage={isHomePage} 
        />
        <ItemCount 
          onClick={toogleIsCartOpen}
          $isScrolled={isScrolled}
          $isHomePage={isHomePage}
        >
          {cartCount}
        </ItemCount>
    </IconContainer>
  )
}

export default CartIcon;