import React from 'react';
import cart from '../shopping-cart.svg';

function CartWidget() {
  return (
    <img src={cart} className="Cart-logo" alt="logo" />
  )
}

export default CartWidget