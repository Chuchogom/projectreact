import React from 'react';
import cart from '../../shopping-cart.svg';

function CartWidget() {
  return (
    <img src={cart} className="navbar-shopping-cart" alt="shopping cart" />
  )
}

export default CartWidget