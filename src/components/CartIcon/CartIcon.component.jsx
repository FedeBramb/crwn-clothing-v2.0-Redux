import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector'
import { setIsCartOpen } from '../../store/cart/cart.action';

import { IconContainer, ShopBagIcon, ItemCount } from './CartIcon.styles';


const CartIcon = ({isScrolled}) => {
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toogleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <IconContainer className={isScrolled ? 'black' : 'white'}>
        <ShopBagIcon className='shop-bag-icon' onClick={toogleIsCartOpen} />
        <ItemCount className='item-count' onClick={toogleIsCartOpen}>{cartCount}</ItemCount>
    </IconContainer>
  )
}

export default CartIcon;