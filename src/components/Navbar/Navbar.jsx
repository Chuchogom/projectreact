import logo from '../../logo.svg';
import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import {NavLink} from 'react-router-dom';

function NavBar() {
  return (
    <div>
        <nav className='navbar'>
        <h1 className='navbar-title'> <img src={logo} className="App-logo" alt="logo" /> Cinema App </h1>
            <ul className='navbar-list'>
                <li className='navbar-item'>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li className='navbar-item'>
                    <NavLink to='/movies'>Movies</NavLink>
                </li>
                <li className='navbar-item'>
                    <NavLink to='/series'>Series</NavLink>
                </li>
                <li className='navbar-item'>
                    <NavLink to='/profile'>Profile</NavLink>
                </li>
                <li className='navbar-item'>
                    <NavLink className='navbar-item' to='cart'>
                        <CartWidget/>
                    </NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar;



