import React from 'react';
import { Logo } from '../../assets';
import { AiOutlineShoppingCart } from "react-icons/ai"

//IMPORTANDO O CSS
import './header.css';

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
                        <li>Home</li>
                        <li>Menu</li>
                        <li>About Us</li>
                        <li>Service</li>
                        <li>
                            <div className="cart">
                            <AiOutlineShoppingCart /> 
                            <p id='cartItemsCount'>2</p>
                            </div>
                        </li>
                    </ul>
                </navbar>

            {/* Mobile */}
        </header>
    )
}