import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.action';

import { 
  CheckOutItemContainer, 
  ImageContainer, 
  Img, 
  Name, 
  QuantityContainer, 
  Price, 
  ArrowContainer, 
  Value, 
  RemoveIcon
} from './CheckOutItem.styles';

const CheckOutItem = ({cartItem}) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <CheckOutItemContainer>
        <ImageContainer>
            <Img src={imageUrl} alt={`${name}`} />
        </ImageContainer>
        <Name> {name} </Name>
        <QuantityContainer>
            <ArrowContainer onClick={removeItemHandler}>&#10094;</ArrowContainer>
            <Value>{quantity}</Value>
            <ArrowContainer onClick={addItemHandler}>&#10095;</ArrowContainer>
        </QuantityContainer>
        <Price>$ {price}</Price>
        <RemoveIcon onClick={clearItemHandler}>&#10005;</RemoveIcon>
    </CheckOutItemContainer>
  )
}

export default CheckOutItem;