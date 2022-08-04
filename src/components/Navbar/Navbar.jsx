import logo from '../../logo.svg';
import React, { useState, useContext } from 'react';
import CartWidget from '../CartWidget/CartWidget';
import Menu from '../Menu/Menu';
import MyOrder from '../../containers/MyOrder/MyOrder'
import { NavLink } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import './NavBar.css'

const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const { state: { cart } } = useContext(AppContext);

    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <div>
            <nav className='navbar'>
                <h1 className='navbar-title'> <img src={logo} className="App-logo" alt="logo" /> YouShop </h1>
                <div className="navbar-left">
                    <ul className='navbar-list'>
                        <li >
                            <NavLink to='/'>
                                All
                            </NavLink>
                        </li>
                        <li >
                            <NavLink to='/'>
                                Clothes
                            </NavLink>
                        </li>
                        <li >
                            <NavLink to='/'>
                                Electronics
                            </NavLink>
                        </li>
                        <li >
                            <NavLink to='/'>
                                Toys
                            </NavLink>
                        </li>
                        <li >
                            <NavLink to='/'>
                                Others
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-right">
                    <ul>
                    <li className="navbar-email" onClick={handleToggle}>
						email@gmail.com
					</li>
                        <li className='navbar-shopping-cart' onClick={() => setToggleOrders(!toggleOrders)}>
                            <NavLink to='cart'>
                                <CartWidget/>
                                {cart.length > 0 ? <div>{cart.length}</div> : null}
                            </NavLink>
                        </li>
                    </ul>
                </div>                
                {toggle && <Menu />}
                {toggleOrders && <MyOrder />}
            </nav>
        </div>
    )
}

export default NavBar;



