import logo from '../../logo.svg';
import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <div>
        <nav className='navbar'>
        <h1 className='navbar-title'> <img src={logo} className="App-logo" alt="logo" /> Cinema App </h1>
            <ul className='navbar-list'>
                <li className='navbar-item'>
                    <a href='/home'>Home</a>
                </li>
                <li className='navbar-item'>
                    <a href='/movies'>Movies</a>
                </li>
                <li className='navbar-item'>
                    <a href='/profile'>Profile</a>
                </li>
                <li className='navbar-item'>
                    <CartWidget/>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar;



