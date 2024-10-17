import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectCartItems } from '../../store/cart/cart.selector.js';

import Button from '../Button/Button.component';
import CartItem from '../CartItem/CartItem.component.jsx';

import { CartDropdownContainer, 
  CartItemsContainer, 
  EmptyMessage  
} from './CartDropdown.styles';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckOutHandler = () => {
    navigate('/checkout')
  }

  return (
    <CartDropdownContainer>
        <CartItemsContainer>
          { cartItems.length ? (
            cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
          ) : (
            <EmptyMessage>Il tuo carrello è vuoto</EmptyMessage>
          )}
        </CartItemsContainer>
        <Button onClick={goToCheckOutHandler}>Check out</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown;