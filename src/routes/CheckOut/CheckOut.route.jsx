import React from 'react';
import { useSelector } from 'react-redux';

import { selectCartTotal, selectCartItems } from '../../store/cart/cart.selector.js';

import CheckOutItem from '../../components/CheckOutItem/CheckOutItem.component.jsx';
import PaymentForm from '../../components/PaymentForm/PaymentForm.component.jsx';

import { CheckOutContainer, CheckOutHeader } from './CheckOut.styles';

const CheckOut = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  
  return (
    <CheckOutContainer>
      <CheckOutHeader>
        <div className='header-block'>
          <span>Prodotto</span>
        </div>
        <div className='header-block'>
         <span>Descrizione</span>
        </div>
        <div className='header-block'>
          <span>Quantità</span>
        </div>
        <div className='header-block'>
          <span>Prezzo</span>
        </div>
        <div className='header-block'>
          <span>Rimuovi</span>
        </div>
      </CheckOutHeader>
        {cartItems.map((cartItem) => {
          return (
            <CheckOutItem key={cartItem.id} cartItem={cartItem} />
        )})}
        <span className='total'>Totale $ {cartTotal}</span>
        <PaymentForm />
    </CheckOutContainer>  
  )
}

export default CheckOut;