import React from 'react';
import { Logo } from '../../assets';
import { AiOutlineShoppingCart } from "react-icons/ai"

//IMPORTANDO O CSS
import './header.css';
import { NavLink } from 'react-router-dom';

export default () => {

    return (
        <header className='mainHeader'>
            {/* Desktop & Tablet */}
            <div className="deskblet">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                    <h1>Mega<span>Mart</span></h1>
                </div>
            </div>

            <navbar>
                    <ul>
                        <li>
                            <NavLink to="/" className={({isActive}) => (isActive ? "linkActive" : "")} >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({isActive}) => (isActive ? "linkActive" : "")}>Contact Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/cart" className={({isActive}) => (isActive ? "linkActive" : "")}>
                                <div className="cart">
                                <AiOutlineShoppingCart /> 
                                <p id='cartItemsCount'>2</p>
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </navbar>

            {/* Mobile */}
        </header>
    )
}